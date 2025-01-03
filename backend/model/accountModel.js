const bcrypt = require('bcrypt');
const db = require('../databases/config');
require('dotenv').config();
const jwtConfig = require('../util/jwt');
const jwt= require("jsonwebtoken");
const logoutList= require('../util/logToken');



const register = (data) => {
    const {username, password, balance} = data;

    const userAlreadyExists = `SELECT * FROM accountuser WHERE name = ?`;
    const queryAccount = `INSERT INTO accountuser (name, password, initial_balance) VALUES (?, ?, ?)`;
    const queryWallet = `INSERT INTO payment (username, balance) VALUES (?, ?)`;

    return new Promise((resolve, reject) => {
        db.query(userAlreadyExists, [username], async (err, res) => {
            if (err) {
                return reject(err);
            }

            if (res.length > 0) {
                resolve({
                    message: `User already exists`
                });
            } else {

                const passwordHash = await bcrypt.hash(password, 10);

                const valuesAccount = [username, passwordHash, balance];
                const valuesWallet = [username, balance];

                // Mulai transaksi
                db.beginTransaction((err) => {
                    if (err) {
                        return reject(err);
                    }

                    // Query untuk akun
                    db.query(queryAccount, valuesAccount, (err, result) => {
                        if (err) {
                            return db.rollback(() => {
                                reject(err);
                            });
                        }

                        // Query untuk wallet
                        db.query(queryWallet, valuesWallet, (err, result) => {
                            if (err) {
                                return db.rollback(() => {
                                    reject(err);
                                });
                            }

                            // Commit transaksi
                            db.commit((err) => {
                                if (err) {
                                    return db.rollback(() => {
                                        reject(err);
                                    });
                                }

                                resolve({
                                    message: 'Account created successfully.',
                                    accountName: username
                                });
                            });
                        });
                    });
                });
            }
        });
    });
};

const login = async (data) => {
    const {username, password} = data;
    const login = `select name, password from accountuser WHERE name = ?`;

    return new Promise((resolve, reject) => {
            db.query(login, [username], (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result.length > 0) {
                   bcrypt.compare(password, result[0].password, (err, isMatch) => {
                        // console.log(password, result[0].password)
                        if (err) {
                            reject(err);
                        }else if (isMatch) {
                            let token= jwt.sign({
                                username: username
                            },jwtConfig.secret,
                                {
                                    algorithm: jwtConfig.algorithm,
                                    expiresIn: "1h"
                                })
                            resolve({
                                username: username,
                                token: `Bearer ${token}`,
                            })

                        }else if (!isMatch) {
                            resolve({
                                message: 'login failed'
                            })
                        }

                    })
                }else if (result.length ===0){
                    resolve({
                        message: 'username or password is invalid'
                    })
                }

        }
    )
}
)
}

const logout = async (token) => {
    return new Promise((resolve, reject) => {
        logoutList.push({
            token: `${token.split(' ')[1]}`,
        })
        resolve({
            message: 'OK',
        })
        return logoutList
    })
};
module.exports = {register, login, logout};
