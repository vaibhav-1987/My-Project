import { useState } from "react"

const LocationInfoStep4 = ({handleLocationInfo}) => {
  const [locationInfo, setLocationInfo] = useState({
    email: "",
    area: "",
    address: "",
    latitude: "",
    city: "",
    pincode: "",
    landmark: "",
    longitude: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocationInfo({
      ...locationInfo,
      [name]: value
    })
    handleLocationInfo({
      ...locationInfo,
      [name]: value
    })
  }

  return (
    <div>
      <div className="flex mt-5 ml-10 mr-20 ">

        <div className="flex flex-col  ml-5 mr-20">
          {/* Email */}
          <div className="flex flex-col">

            <label className="text-gray-500 my-1 text-lg font-semibold">
              Email
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              type="email"
              name="email"
              placeholder="enter your email"
              value={locationInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* area */}
          <div>
          <label className="text-gray-500 my-1 text-lg font-semibold">
            Area
          </label>
          <select
            className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
            border border-solid border-gray-400 rounded-lg"
            name="area"
            value={locationInfo.area}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Area</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>

          </select>
          </div>
          {/* address */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Address
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              type="text"
              name="address"
              placeholder="address"
              value={locationInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* latitude */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Latitude
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              type="text"
              name="latitude"
              placeholder="latitude"
              value={locationInfo.latitude}
              onChange={handleInputChange}
              required
            />
          </div>

        </div>

        <div className="flex flex-col  ml-10 mr-10">
          {/* City Dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              City
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-2 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              name="city"
              value={locationInfo.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="City 1">City 1</option>
              <option value="City 2">City 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Pincode Dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Pincode
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-2 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              name="pincode"
              value={locationInfo.pincode}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Pincode</option>
              <option value="Pincode 1">Pincode 1</option>
              <option value="Pincode 2">Pincode 2</option>
              {/* Add more options as needed */}
            </select>
          </div>


          {/* Landmark */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Landmark
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={locationInfo.landmark}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Longitude */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Longitude
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={locationInfo.longitude}
              onChange={handleInputChange}
              required
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default LocationInfoStep4