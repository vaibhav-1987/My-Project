const express = require("express");
const router =  express.Router();
const {body, validationResult} = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET
router.get("/",(req,res)=>{
    res.send("this is the userRoute")
})
router.post("/register",
            // validator for confirm password
            [ body("email").isEmail().normalizeEmail(),
            body("password").isLength({min : 6, max: 16 }),
            body("confirmpassword").custom((value,{req})=>{
                if(value!== req.body.password){
                    throw new Error("Passwords does not match")
                }
                return true;
            })
            ],

        async(req,res)=>{
            const errors = validationResult(req);
            // console.log(errors)
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }
            try {
                const { email, password } = req.body;
                // Hash the password before saving it to the database
                // Using bcrypt for hashing
                bcrypt.hash(password, 10, async(err,hash)=>{
                   if(err){
                       return  res.status.json({
                            status : "failure ",
                            message : err.message
                        })
                   }
                    //  if user already registred then return 
                    const user= await User.findOne({email})
                        if(user){
                            return res.status(400).json({
                                meassage:"user is already registerd"
                            })
                        }
                   // Create a new user instance and saving in the DB.
                   const newUser = await User.create({
                        email,password : hash
                   })
                   res.status(201).json({
                    message : "User Registration is successful",
                    newUser
                   })
                });
            }catch (err) {
                // console.error(err);
                res.status(500).json({ message: 'Server Error & registration failed ' });
            }

})
router.post("/login",[body("email"),body("password")],
  async (req,res)=>{
    try{
        const errors =validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors : errors.array()})
            }
        const {email,password}=req.body;
        const user = await User.findOne({password});
        if(!user){
            return res.status(400).json({
                meassage:"user is not registerd"
            })
           
        }

        bcrypt.compare(password ,user.password, async (err,result)=>{
            if(err){
               return res.status(400).json({
                    message: err.message
                }) 
               
            }
            if(result){
                const token = jwt.sign({
                    exp : Math.floor(Date.now()/1000)+(600*600),
                    data : user._id
                },secretKey)
                res.status(200).json({
                    message :  "login successful",
                    token
                })
            }
         
        })
       
    }
    catch(err){
        res.status(400).json({
         status : "login-failed",
            message : err.message
        })
    }
   
} )

module.exports = router;






//    one more way
            // const newUser = new User({
            //     email,
            //     password: hashedPassword,
            //   });
          
            //   await newUser.save();
          
            //   res.status(201).json({ message: 'User registered successfully' });
            // } 