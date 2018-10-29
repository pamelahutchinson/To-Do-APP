
//require the just installed express app
let express = require('express');

//then we call express
let app = express();

//takes us to the root (/) URL
app.get('/', function (req,res){
    
    //when we visit the root URL express will respond with 'Hello World'
    res.render('index');
});

//the server is listening on port 3000 for connections
app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

app.set('view engine','ejs');

//set up a Post request for the /addtask route
app.post('/addtask', function(req,res){
    res.render('index')
});


//Use middleware to make use of the key-value pairs stored on the req-body object.
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
//------------------------------------------------

//the task array with initital placeholders for added task
let task = ["buy socks","practise with nodejs"];

//post route for adding new task
app.post ('/addtask', function(req,res){
    let newTask = req.body.newtask;
    
    //add the new task from the post route into the array
    task.push(newTask);
    res.redirect("/");//after adding to the array go back to the root route
});

//render the ejs and display added task, task(index.ejs)=task(array)
app.get("/", function(req,res){
    res.sender("index", {task:task});
});

