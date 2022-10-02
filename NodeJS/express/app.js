const express=require('express')
const app = express();

/*Middleware*/
const reqFilter = (reqobject,resobject,next) =>{
    console.log('reqFilter')
    next();
}
app.use(reqFilter)
app.get('/',(req,res) =>{
    res.send("Welcome to Stokka");
});

app.get('/home',(req,res) =>{
    res.send("Welcome to Stokka homepage");
});

app.listen(4000,()=>{
    console.log('Listening on port 4000');
});