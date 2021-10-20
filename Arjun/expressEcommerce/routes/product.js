const express = require('express')
const router  = express.Router();
router.use(express.json());

router.get("/list",(req,res)=>{
    return res.json({data:["iphone 13","One Plus 9R","Samsang s20 FE"]})
});
module.exports  = router;