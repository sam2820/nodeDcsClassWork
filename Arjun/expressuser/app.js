const express = require('express');
const user = require('./user');
const app = express()
const port = 5000;
app.use(express.json());
 const users = require("./user");

 //app.get('/', (req, res) => res.send('Hello World!'))

app.post("/registration",(req,res)=> {
 const uname= req.body.username;
 const pass = req.body.password;
 const name = req.body.name;
 const age = req.body.age;
 const user = users.filter((u) => u.username === uname);
 if (user.length === 0 ){
    return res.json({data:'registration succesfully ....'});
 }else{
    return res.json({data:'username are already teken . please choose another ....'});
 }
});
app.post("/login",(req,res)=> {
    const uname= req.body.username;
    const pass = req.body.password;
   
    const user = users.filter((u) => (u.username === uname && u.password === pass));
    console.log(user)
    if (user.length === 0 ){
       return res.json({data:'login error ....'});
    }else{
        return res.json({data:'login succesfully ....'});
    }
   });
   app.get("/list",(req,res)=> {
     const name = req.query.name;
     const age = req.query.age;
     
     const userlist = user.filter((item)=> item.name === name && item.age > parseInt(age));
   if (userlist.length === 0 ){
        return res.json({data:"user not found"}) ;
   }else{
       return res.json({data:userlist});
   }
    }); 
app.listen(port, () => console.log(`server runing on port 5000!`));
