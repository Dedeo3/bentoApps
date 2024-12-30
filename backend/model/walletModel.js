const db= require('../databases/config');

const deposit = async (data) => {
    const { username, balance } = data;

    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM payment WHERE username = ?";
        db.query(query, [username], (err, results) => {
            if (err) {
                return reject(err);
            }

            if (results.length === 0) {
                return reject(new Error("Username not found"));
            }

            db.beginTransaction((err) => {
                if (err) {
                    return reject(err);
                }

                const currentBalance = results[0].balance; // Ambil balance dari hasil query
                const queryDeposit = `UPDATE payment SET balance = ? WHERE username = ?`;
                const newBalance = currentBalance + balance;

                db.query(queryDeposit, [newBalance, username], (err) => {
                    if (err) {
                        return db.rollback(() => reject(err));
                    }

                    db.commit((err) => {
                        if (err) {
                            return db.rollback(() => reject(err));
                        }

                        resolve({
                            message: "Deposit is successfully added to balance",
                            balance: newBalance,
                        });
                    });
                });
            });
        });
    });
};

module.exports=deposit