const {model,Schema} = require('mongoose')

const tasksSchema = new Schema ({
    titulo: {
        type: String
        
    },
    descripcion: {
        type: String
    },
    isActive: {
        type: Boolean,
    },
    
}, {versionKey: false})

module.exports = model("tasks", tasksSchema)