const {model,Schema} = require('mongoose')

const newUser = new Schema ({
    nombre: String,
    apellido: String
}, {versionKey: false})

module.exports = model("user", newUser)