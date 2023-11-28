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
        type : Number,
        required:true
    },
    propertyDescription : {
        type : String,
        required:true
    },
    negotiable : {
        type : Boolean,
        required:true
    },
    ownerShip : {
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
    enum: ['SqFt', 'SqYd', 'SqMeter', 'Acres', 'Hectares'],
    default: 'SqFt'
  },
  numberOfBHK: {
    type: Number,
    required: true
  },
  numberOfFloors: {
    type: Number,
    required: true
  },
  attachedBathroom: {
    type: Boolean,
    default: false
  },
  westernToilet: {
    type: Boolean,
    default: false
  },
  furnished: {
    type: Boolean,
    default: false
  },
  carParking: {
    type: Boolean,
    default: false
  },
  lift: {
    type: Boolean,
    default: false
  },
  electricity: {
    type: Boolean,
    default: false
  },
  facing: {
    type: String,
    enum: ['North', 'South', 'East', 'West', 'North-East', 'South-East', 'North-West', 'South-West'],
    default: 'North'
  }
});


const generalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  saleType: {
    type: String,
    enum: ['For Sale', 'For Rent', 'Commercial'],
    default: 'For Sale'
  },
  featuredPackage: {
    type: String,
    enum: ['Basic', 'Premium', 'Gold'],
    default: 'Basic'
  },
  ppdPackage: {
    type: String,
    enum: ['Standard', 'Advanced', 'Premium'],
    default: 'Standard'
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
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});


const AddNewPropertySchema = new mongoose.Schema({
    basicInfo : basicInfoSchema,
    propertyDetail : propertyDetailSchema,
    generalInfo: generalInfoSchema,
    locationInfo:locationInfoSchema
}) 

const AddNewProperty = mongoose.model("AddNewProperty",AddNewPropertySchema)
module.exports = AddNewProperty;