const bcrypt = require('bcrypt');
const db = require('../databases/config');
const {v4: uuidv4} = require("uuid");
let session=[];

const register = (data) => {
    const {username, password, payment_id, balance} = data;

    const userAlreadyExists = `SELECT * FROM account WHERE name = ?`;
    const queryAccount = `INSERT INTO account (name, password, payment_id, balance) VALUES (?, ?, ?, ?)`;
    const queryWallet = `INSERT INTO wallet (payment_id, balance) VALUES (?, ?)`;

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

                const valuesAccount = [username, passwordHash, payment_id, balance];
                const valuesWallet = [payment_id, balance];

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
    const login = `select name, password from account WHERE name = ?`;

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
                            const uuid=uuidv4()
                            resolve({
                                username: username,
                                token: uuid,
                            })
                            session.push({
                                username: username,
                                token: uuid,
                            })
                            return session
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

const logout = async (username) => {
    try {
        console.log("session awalnya",session)
        session.filter(user => user.id !== username)
        return {
            request: 'OK',
        }
       return session
    }
    catch (error) {
        throw error;
    }
}
module.exports = {register, login, logout};
