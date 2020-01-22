const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authModel = require("./auth-model")
const restricted = require("../middleware/restricted")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await authModel.findBy({ username }).first()
        const passwordValid = bcrypt.compare(password, user.password)
    
        if (user && passwordValid) {
            const token = jwt.sign({
                subject: user.id,
                username: user.username,
            }, process.env.SECRET , {
                expiresIn: "1d"
            })
    
            res.status(200).json({
                message: `Welcome ${user.username}`,
                token
            })
        } else {
            res.status(401).json({
                message: "Invalid credentials"
            })
        }
    } catch(err) {
        next(err)
    }
})

router.get("/users", restricted(), async (req, res, next) => {
    try {
        const users = await authModel.find()
        
        res.status(200).json({
        users
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router