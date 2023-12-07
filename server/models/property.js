const mongoose = require("mongoose")

const basicInfoSchema= new mongoose.Schema({
    propertyType : {
        type : String,
        required:true
    },
    price : {
        type : Number,
        required:true
    },
    propertyAge : {
        type : String,
        required:true
    },
    propertyDescription : {
        type : String,
        required:true
    },
    negotiable : {
        type : String,
        required:true
    },
    ownership : {
        type : String,
        required:true
    },
    propertyApproved : {
        type : String,
        required:true
    },
    bankLoan : {
        type : String,
        required:true
    }
});

const propertyDetailSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true
  },
  breadth: {
    type: Number,
    required: true
  },
  totalArea: {
    type: Number,
    required: true
  },
  areaUnit: {
    type: String,
    required : true
    // enum: ['SqFt', 'SqYd', 'SqMeter', 'Acres', 'Hectares'],
    // default: 'SqFt'
  },
  numberOfBHK: {
    type: String,
    required: true
  },
  numberOfFloors: {
    type: String,
    required: true
  },
  attachedBathroom: {
    type: String,
    required : true
  },
  westernToilet: {
    type: String,
    required : true
  },
  furnished: {
    type: String,
    required : true
  },
  carParking: {
    type: String,
    required : true
  },
  lift: {
    type: String,
    required : true
  },
  electricity: {
    type: String,
    required : true
  },
  facing: {
    type: String,
    required : true
  }
});


const generalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  saleType: {
    type: String,
    required: true
  },
  featuredPackage: {
    type: String,
    required: true
  },
  ppdPackage: {
    type: String,
    required: true
  },
  photo: {
    type: String, // Store the path/url to the uploaded image
    required: true
  }
});



const locationInfoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  area: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  landmark: {
    type: String
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
});


const AddNewPropertySchema = new mongoose.Schema({
    ppdId:{
      type : String,
      required : true
    },
    views:{
      type : Number,
      required : true
    },
    status:{
      type : String,
      required : true
    },
    daysLeft:{
      type : String,
      required : true
    },
    area : {
      type : Number,
      required : true
    },
    basicInfo : basicInfoSchema,
    propertyDetails : propertyDetailSchema,
    generalInfo: generalInfoSchema,
    locationInfo:locationInfoSchema,

}) 

const NewProperty = mongoose.model("AddNewProperty",AddNewPropertySchema)
module.exports = NewProperty;