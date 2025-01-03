const jwt = require('jsonwebtoken');
const {secret} = require("./jwt");
const logoutList= require( "../util/logToken");

const authenticateJWT = (req, res, next) => {
    console.log(logoutList);
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(403).send({ message: "Invalid token"});
            }
            console.log(`${logoutList.some(list=> list.token ===token)}`)
            if (logoutList.some(list=> list.token ===token)){
                return res.status(403).send({ message: "you are already log out"})
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).send({ message: "Authorization header missing" });
    }
};

module.exports = authenticateJWT;
