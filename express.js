var express = require('express');

var app = express();

app.use('/static',express.static('static'));

app.get('/',function(req,res){
	res.send('this is the homepage');
});
app.get('/profile/:id',function(req,res){
	res.send("you requested profile of " +req.params.id);
});
app.get('/contact',function(req,res){
	res.sendFile(__dirname+'/Profile.html'); 
})

app.listen(3000);