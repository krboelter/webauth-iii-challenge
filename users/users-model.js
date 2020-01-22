const bcrypt = require("bcryptjs")
const db = require("../data/db-config")

function add(user) {
    user.password = await bcrypt.hash(user.password, 14)

    const [id] = await db("users")
        .insert(user)
}

module.exports = {
    add,
}