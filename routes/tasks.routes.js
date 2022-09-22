const router = require('express').Router()
const {getTasks, postTasks, putTasks, deleteTasks} = require("../controllers/tasks.controllers")

router.get("/task", getTasks)
router.post("/task", postTasks)
router.put("/task", putTasks)
router.delete("/task", deleteTasks)

module.exports = router