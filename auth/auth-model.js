const db = require("../data/db-config")

function find() {
    const users = db("users")
        .select("id", "username", "department")
    
    return users
}

function findBy(user) {
    return db("users")
        .where(user)
}

module.exports = {
    find,
    findBy
}