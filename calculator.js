//jshint esversion:6
const express =require('express');
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html');
});

app.post('/bmicalculator',function(req,res){
    var h= Number(req.body.height);
    var w= Number(req.body.weight);
    var bmi=w/(h*h);
    res.send('the bmi is: '+ bmi);
})

app.post('/',function(req,res){
    var no1=Number(req.body.num1);
var no2=Number(req.body.num2);
var result= no1+no2;
    res.send("result of calculation: "+result );
});




app.listen(3000,function(){
    console.log("server online");
});