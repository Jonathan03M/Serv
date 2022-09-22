const ctrl = {}
const user = require("../models/user")

ctrl.getUser = async (req, res) => {
    const users = await user.find()
    res.json(users)    
}

ctrl.postUser = async (req, res) => {
    const {nombre, apellido} = req.body

    const nuevoUsuario = new user({
        nombre,
        apellido
    })

    const guardarUsuario = await nuevoUsuario.save()

    res.json(guardarUsuario);
}

ctrl.deleteUser = async (req,res) => {
    const {id} = req.body

    const eliminarUsuario = await user.deleteOne({_id:id})

    res.json(eliminarUsuario)
}

ctrl.putUser = (req, res) => {
    res.send("putUser")
}

module.exports = ctrl