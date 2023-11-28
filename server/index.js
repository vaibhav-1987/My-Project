const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require ("./config/connect_db")
const userRoutes = require("./routes/user")
const propertyRoutes = require("./routes/property")
// const middleware = require("../middleware/middleware");
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.use("/api/v1/users",userRoutes);
app.use("/api/v1/property",propertyRoutes)

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startServer()