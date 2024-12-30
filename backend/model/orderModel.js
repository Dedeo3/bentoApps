const db = require('../databases/config');

const order = async (data) => {
    const { menu_id, account_id, start_time, end_time, quantity, status, username, price } = data;

    return new Promise((resolve, reject) => {
        // Check if user exists
        const userAlreadyExists = `SELECT * FROM accountuser WHERE name = ?`;
        db.query(userAlreadyExists, [username], (err, result) => {
            if (err) return reject(err);

            if (result.length === 0) {
                return resolve({
                    message: `User not found`,
                });
            }

            const totalPrice = price * quantity;

            // Insert into orderitem
            const insertOrderItem = `
                INSERT INTO orderitem (menu_id, account_id, start_time, end_time, quantity, status, price)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(insertOrderItem, [menu_id, account_id, start_time, end_time, quantity, status, totalPrice], (err, result) => {
                if (err) return reject(err);

                // Update or Insert into totalorder
                const updateTotalOrder = `
                    INSERT INTO totalorder (account_id, total_price, status)
                    VALUES (
                        ?, 
                        (SELECT SUM(price) FROM orderitem WHERE account_id = ?), 
                        ?
                    )
                    ON DUPLICATE KEY UPDATE 
                        total_price = (SELECT SUM(price) FROM orderitem WHERE account_id = ?),
                        status = VALUES(status)
                `;
                db.query(updateTotalOrder, [account_id, account_id, status, account_id], (err) => {
                    if (err) return reject(err);

                    // Retrieve updated total price
                    const totalCostQuery = `SELECT SUM(total_price) AS total_price FROM totalorder WHERE account_id = ?`;
                    db.query(totalCostQuery, [account_id], (err, totalResult) => {
                        if (err) return reject(err);
                        let ekstrakTotalprice= totalResult[0].total_price
                        const payment= `update payment set balance=(select balance from payment where username = ?) - ${ekstrakTotalprice} where username = ?`;
                        db.query(payment, [username, username], (err, result) => {
                            if (err) return reject(err);
                            resolve({
                                message: 'Successfully ordered item',
                                data: {
                                    menu_id: menu_id,
                                    account_id: account_id,
                                    start_time: start_time,
                                    end_time: end_time,
                                    quantity: quantity,
                                    status: status,
                                    username: username,
                                    totalPrice: totalResult[0]?.total_price || 0
                                },
                            });
                        })


                    });
                });
            });
        });
    });
};



module.exports = { order };
