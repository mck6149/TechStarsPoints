const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

express.json({})



/**Used to set up slack api verification**/

// app.post('/', function(req, res){
//     console.log(req.body);
//     res.send("HTTP 200 OK Content-type: text/plain" + req.body.challenge);
// });

app.listen(3000)