var express = require('express')
var app = express()

app.get('/', (req, res) =>{

    res.send("hello world " + process.env.INSTANCE_NAME )
})
app.use(express.static(__dirname))
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port, "public port ", process.env.PUBLIC_PORT)
})
