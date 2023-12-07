const AddNewProperty = require("../models/property");
const User = require("../models/user")
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const middleware = async (req, res, next) => {
    try {

        // console.log(req);
        if (req.headers.authorization) {
            const token = req.headers.authorization.split("bearer ")[1];
            // console.log(token)
            const decoded = await jwt.verify(token,secret)
            // console.log(decoded);
            if (decoded) {
                const user = await User.findOne({ _id: decoded.data });
                req.user = user._id;
                next();
                return;
            }
            else {
                res.status(400).json({
                    status: "failed",
                    message: "not authorized"
                })
            }
           
        }
    } catch (err) {
        res.json({
            message: "invalid token"
        })
    }

}

module.exports = middleware
