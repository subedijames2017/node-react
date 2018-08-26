const config = require('./config');
const express = require('express');
const router = require('./api');
var app= express();
app.get('/',(req,res)=>{
  res.render('index',{
    content:"hello welcome to the ZamesCommune"
  });
})
app.get('/about',(req,res)=>{
  res.send('its tha about page')
})
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/api', router);
app.listen(config.port,()=>{
  console.log("listning to the port"+config.port);
})
