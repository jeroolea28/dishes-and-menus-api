module.exports = app => {

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const dishRouter = require('./dish.routes')
    app.use('/api/dish', dishRouter)

    const menuRouter = require('./menu.routes')
    app.use('/api/menu', menuRouter)

    const imageRouter = require('./uploader.routes')
    app.use('/api/uploader', imageRouter)
}