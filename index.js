const express=require('express');
const app=express();
var bodyParser=require('body-parser');
app.use(require('./corsConfig/cors'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/vmCrud',require('./routes/vmCrud'));

app.listen(process.env.PORT || 3001,()=>{
    console.log("Server Started at port 3001 ");
});
