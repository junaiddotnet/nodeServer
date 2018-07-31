const express  = require('express');
const http = require('http');
const logger  = require('morgan');
const app = express();
const path  = require('path');

//app.use(express.static(path.resolve(__dirname,"public")));
app.use (logger("short"));
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');

app.use(function(request,response,next){
  
    var min  = (new Date().getMinutes());
    if (min % 2 ===0)
    {
        next();
    }
    else
    {
        response.statusCode=403;
        response.end("not authorized");
    }
});

app.use(function(request,response,next){
    //response.end('user is having a password is juand 1621 ');
    next();
},function(request,response){
    //response.sendFile(__dirname+"/"+"one.html");
   // response.status(401).send('not allowed');
   response.render('index',{message:'junadid mahmood'});
});

app.use(function(request,response){
    response.end('Testint  only ..');
});
http.createServer(app).listen(3000);