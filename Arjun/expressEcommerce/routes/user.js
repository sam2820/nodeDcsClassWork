const express = require('express')
const router  = express.Router();
router.use(express.json());

router.get("/registration",(req,res)=>{
    return res.json({data:'user registration page'})
});
router.get("/login",(req,res)=>{
    return res.json({data:'user login page'})
});
router.get("/forgetpassword",(req,res)=>{
    return res.json({data:'user forget password page'})
});
module.exports  = router;