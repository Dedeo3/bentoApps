const bcrypt = require('bcrypt');
const db = require('../databases/config');

const register = (data) => {
    const { username, password, payment_id, balance } = data;

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

module.exports = { register };
