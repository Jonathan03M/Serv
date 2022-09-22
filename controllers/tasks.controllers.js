const ctrlTasks = {}
const Tasks = require("../models/tasks")

ctrlTasks.getTasks = async (req, res) => {
    const tasks = await Tasks.find()
    res.json(tasks)    
}

ctrlTasks.postTasks = async (req, res) => {
    const {titulo, descripcion} = req.body

    const nuevaTarea = new Tasks({
        titulo,
        descripcion
    })

    try {
        const guardarTarea = await nuevaTarea.save()
        res.json(guardarTarea);
        return res.json('La tarea fue guardada con exito')
       
    } catch (error) {
        console.log(error)
    }
    
  
}




ctrlTasks.deleteTasks = async (req,res) => {
   
    const eliminarTarea = await task.deleteOne({_id:id})

    res.json(eliminarTarea)

}



ctrlTasks.putTasks = (req, res) => {
    res.send("putTasks")
}

module.exports = ctrlTasks