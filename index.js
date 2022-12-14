const express = require('express')
require("dotenv").config()
require("./database/conexion")


const app = express()


app.use(express.json())


app.use(require("./routes/user.routes"))
app.use(require("./routes/tasks.routes"))


app.listen(3000)

