const db= require('../databases/config');

const register = (data) => {
    const { username, password, payment_id, balance } = data;


    const queryAccount = `INSERT INTO account (name, password, payment_id, balance) VALUES (?, ?, ?, ?)`;


    const queryWallet = `INSERT INTO wallet (payment_id, balance) VALUES (?, ?)`;


    const valuesAccount = [username, password, payment_id, balance];
    const valuesWallet = [payment_id, balance];

    return new Promise((resolve, reject) => {
        // start transaction if errors in one of query then rollback
        db.beginTransaction((err) => {
            if (err) {
                return reject(err);
            }


            db.query(queryAccount, valuesAccount, (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        reject(err);
                    });
                }

                db.query(queryWallet, valuesWallet, (err, result) => {
                    if (err) {
                        return db.rollback(() => {
                            reject(err);
                        });
                    }

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
    });
};

module.exports={register}