var express = require('express')
var reload = require('reload')
var app = express()
let port = 8080
app.use(express.static('public'))
app.get('/', function(req, res){
  console.log('got request at /')
})
app.listen(port, function(){
  console.log('listening on port', port)
})
