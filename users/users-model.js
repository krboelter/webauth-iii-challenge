const bcrypt = require("bcryptjs")
const db = require("../data/db-config")

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)

    const [id] = await db("users")
        .insert(user)
    
    return findById(id)
}

function findById(id) {
    return db("users")
        .where({ id })
        .first("id", "username")
}

module.exports = {
    add,
    findById,
}