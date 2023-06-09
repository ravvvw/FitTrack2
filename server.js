const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', function(req, res){
    res.send('404 page not found');
});

app.listen(4000, function(){
    console.log("server is running on port 4000");
});