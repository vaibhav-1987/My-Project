const express = require ("express");
const router = express.Router();
const AddNewProperty = require("../models/property");


router.get("/",async (req,res)=>{
    res.send("this is addNewProperty Page")
})
router.post("/create",async (req,res)=>{
    res.send("create addNewProperty Page")
})


module.exports = router;