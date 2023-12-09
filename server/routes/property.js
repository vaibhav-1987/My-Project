const express = require ("express");
const router = express.Router();
const NewProperty = require("../models/property");

//  other random keys and values for property object
const array=["sold","unsold"]
const getRandomElement =(array)=>{
    const randomIndex = Math.floor(Math.random()*array.length)
    return array[randomIndex]
}
const generateRandomID = ()=> {
    const prefix = 'PPD';
    const randomNumber = Math.floor(Math.random() * 10000); // Generates a random 4-digit number
    const paddedNumber = randomNumber.toString().padStart(4, '0'); // Pads the number with leading zeros if needed
    const randomID = prefix + paddedNumber;
    return randomID;
}
const status = getRandomElement(array);
const views = Math.floor(Math.random() * 20);
const daysLeft =Math.floor(Math.random() * 30);
const ppdId = generateRandomID();
// 
router.get("/",async (req,res)=>{
    

    const propertiesList = await NewProperty.find() 
    // console.log(propertiesList);
    res.status(200).send({
        message : "success",
        propertiesList
    })
})
router.post("/",async (req,res)=>{
    res.send("this is(Post) addNewProperty Page")
})
router.post("/add",async (req,res)=>{
   try{
    const {basicInfo,propertyDetails,generalInfo,locationInfo} = req.body;
    const newProperty = new NewProperty ({
        ppdId : ppdId,
        views: views ,
        status : status,
        daysLeft :daysLeft ,
        area : propertyDetails.length * propertyDetails.breadth,
        basicInfo : basicInfo,
        propertyDetail : propertyDetails ,
        generalInfo : generalInfo ,
        locationInfo : locationInfo
    }) 
    await newProperty.save()

    res.status(200).json({
        message : "success",
        newProperty
    })
   }catch(err){
    res.status(400).json({
        status : "failure",
        message : "error in adding data"
    })
   }
})


module.exports = router;