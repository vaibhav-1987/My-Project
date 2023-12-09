import { useState } from "react"

const PropertyDetailsStep2 = ({ handlePropertyDetails }) => {

  const [propertyDetails, setPropertyDetails] = useState({
    length: "",
    breadth: "",
    totalArea: "",
    areaUnit: "",
    noofBHK: "",
    noofFloors: "",
    attached: "",
    furnished: "",
    lift: "",
    carParking: "",
    westernToilet: "",
    facing: "",
    electricity: ""
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value
    })
    handlePropertyDetails({
      ...propertyDetails,
      [name]: value
    })
  }
  return (
    <div>
      <div className="flex mt-5 ml-10 mr-20">

        <div className="flec flex-col ml-5 mr-20 ">
          {/* length */}
          <div className="flex flex-col ">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Length
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-2 pr-56 
             border border-solid border-gray-400 rounded-lg"
              type="number"
              name="length"
              placeholder="Example: 1000"
              value={propertyDetails.length}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* totalArea */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              TotalArea
            </label>
            <input
              className=" mt-1 mb-4 pl-4 py-2 pr-56 
               border border-solid border-gray-400 rounded-lg"
              type="number"
              name="totalArea"
              placeholder="Example: 5000"
              value={propertyDetails.totalArea}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Select input for No. of BHK */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              No. of BHK
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
                border border-solid border-gray-400 rounded-lg"
              name="noofBHK"
              value={propertyDetails.noofBHK}
              onChange={handleInputChange}
              required
            >
              <option value="" >Select No. of BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
          </div>
          {/* Select input for Attached */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Attached
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56  text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="attached"
              value={propertyDetails.attached}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* furnished */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Furnished
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="furnished"
              value={propertyDetails.furnished}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Furnished</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </div>
          {/* lift */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Lift
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="lift"
              value={propertyDetails.lift}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Lift</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* facing */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Facing
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="facing"
              value={propertyDetails.facing}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Facing</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>



        </div>

        <div className="flex flex-col ml-10 mr-10 ">
          {/* breadth */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Breadth
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-2 pr-56
              border border-solid border-gray-400 rounded-lg"
              type="number"
              placeholder="Example: 1000"
              name="breadth"
              value={propertyDetails.breadth}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* area unit */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Area Unit
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
      border border-solid border-gray-400 rounded-lg"
              name="areaUnit"
              value={propertyDetails.areaUnit}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Area Unit</option>
              <option value="sqft">Square Feet (sqft)</option>
              <option value="sqm">Square Meters (sqm)</option>
              <option value="acres">Acres</option>
              <option value="hectares">Hectares</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* noofFloors */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              No. of Floors
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="noofFloors"
              value={propertyDetails.noofFloors}
              onChange={handleInputChange}
              required
            >
              <option value="">Select No. of Floors</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* western Toliet */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Western Toilet
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="westernToilet"
              value={propertyDetails.westernToilet}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Toilet Type</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* Car Parking */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Car Parking
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-2 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="carParking"
              value={propertyDetails.carParking}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Parking Availability</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              {/* Add other options as needed */}
            </select>
          </div>

          {/* electricity */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Electricity
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-2 pr-56 
              border border-solid border-gray-400 rounded-lg"
              type="text"
              name="electricity"
              placeholder="Example: phase 3"
              value={propertyDetails.electricity}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PropertyDetailsStep2