const express = require('express')
const app = express()
require('dotenv').config()//config env variables from .env file if exists
const port = process.env.PORT
const router = require('./src/routes')
const { swaggerSpec, swaggerUi } = require('./swagger')
app.use(express.json())//body parser. 
app.use('/api/v1', router)
if (!port || !process.env.NODE_ENV) {
    console.error('Please define port and node env in env variables')
    process.exit(0)
}
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//unhandled requests in the above router
app.use((req, res, next) => {
    res.status(404).json({ error: 'not found' })
})
//exceptions caught in the above router
app.use((error, req, res, next) => {
    res.status(501).json({ error: error.message })
})

module.exports = app