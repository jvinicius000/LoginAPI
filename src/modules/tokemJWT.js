const jwt = require('jsonwebtoken');

module.exports = (params = {}) => {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 86400
    })
}