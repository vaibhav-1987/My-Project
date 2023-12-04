import { useState } from "react"

const GeneralInfoStep3 = ({ handleGeneralInfo }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    postedBy: "",
    featuredPackage: "",
    mobile: "",
    saleType: "",
    ppdPackage: "",
    image: null
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGeneralInfo({
      ...generalInfo,
      [name]: value
    })
    handleGeneralInfo({
      ...generalInfo,
      [name]: value
    })
  }
  const handleImageChange = () => {

  }
  return (
    <div>
      <div className="flex mt-5 ml-10 mr-20 ">
        <div className="flex flex-col  ml-5 mr-20">
          {/* name */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Name
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={generalInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* posted by */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Posted By
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="postedBy"
              value={generalInfo.postedBy}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Posted By</option>
              <option value="Owner">Owner</option>
              <option value="Agent">Agent</option>
              <option value="Builder">Builder</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* featured package */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Featured Package
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
               border border-solid border-gray-400 rounded-lg"
              name="featuredPackage"
              value={generalInfo.featuredPackage}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Featured Package</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* image upload */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Image
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 text-gray-500"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              required
            />
          </div>

        </div>
        <div className="flex flex-col  ml-10 mr-10">
          {/* mobile */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Mobile
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={generalInfo.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* sale type */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Sale Type
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="saleType"
              value={generalInfo.saleType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Sale Type</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* ppd package */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              PPD Package
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="ppdPackage"
              value={generalInfo.ppdPackage}
              onChange={handleInputChange}
              required
            >
              <option value="">Select PPD Package</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              {/* Add other options as needed */}
            </select>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GeneralInfoStep3