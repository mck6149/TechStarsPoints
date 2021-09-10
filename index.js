const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const podium = require('./helpers.js');

express.json({})

/**Used to set up slack api verification**/

app.post('/', function(req, res){
    console.log(req.body);
    // Handles verifications for slack
    if (req.body.challenge){
        res.send("HTTP 200 OK Content-type: text/plain" + req.body.challenge);
    }

    // Handles bot mentions
    else if (req.body.event.type == "app_mention") {
        console.log("Bot Mentioned");
        res.send(200)
    }    
});


app.listen(3000, function(){console.log("Listening on port 3000")})

