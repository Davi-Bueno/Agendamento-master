const express = require('express')
const app = express()
const route = require('./sever/src/routes/routes')
const config = require('./sever/src/config/connection')
const PORT = 5000

app.use(express.json());
app.use('/', route)

app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
})