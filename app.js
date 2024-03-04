require("dotenv").config()

require("./db")

const express = require("express")

const { isAuthenticated } = require("./middleware/jwt.middleware")

const app = express()
require("./config")(app)

const mainRoutes = require("./routes/main.routes")
app.use("/", mainRoutes)

const authRouter = require('./routes/auth.routes')
app.use('/api/auth', authRouter)

const dishRoutes = require('./routes/dish.routes')
app.use('/api/dish', dishRoutes)

const menuRoutes = require('./routes/menu.routes')
app.use('/api/menu', menuRoutes)

require("./error-handling")(app)

module.exports = app
