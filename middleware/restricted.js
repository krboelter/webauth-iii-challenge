const jwt = require("jsonwebtoken")
const  secret = process.env.SECRET || "another default secret"

module.exports = () => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization
            const decoded = jwt.verify(token, secret)

            req.userId = decoded.subject
            next()
        } catch(err) {
            return res.status(401).json({
                message: "You shall not pass!"
            })
        }
    }
}