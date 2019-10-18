// Imports
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var server = express();

//DAMN MA MAN

server.use(bodyParser.json());
// Instantiate server
var uri = "mongodb+srv://native:bekerleboss@databaseemysarbek-g43vk.gcp.mongodb.net/test?retryWrites=true&w=majority"

//Import Routes
const postsRoute = require('./routes/posts');

server.use('/posts', postsRoute);


//Configure Routes
server.get("/", function(req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('Welcome home');
});



// Connect to DB
mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true},
 function (err, db){
    console.log("Connected to tutoriel Mongo Database");
    });


//Listening to the Server
server.listen(8080);


// Lauch Server
/*server.listen(8080, function(){
    console.log("Server listening on port 8080\nWaiting for actions...");
    MongoClient.connect(uri, function (err, db){
        console.log("Connected to tutoriel Mongo Database");
        var dbo = db.db('tutoriel').collection("personnages").find();
        dbo.each(function(err, doc){
            console.log(doc);
        })
        db.close();
    });
});*/