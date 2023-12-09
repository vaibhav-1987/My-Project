import { useState } from "react"


const BasicInfoStep = ({handleBasicInfo}) => {
  const [basicInfo, setBasicInfo] = useState({
    propertyType: "",
    price: "",
    propertyAge: "",
    propertyDescription: "",
    negotiable: "",
    ownership: "",
    propertyApproved: "",
    bankLoan: ""
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBasicInfo({
      ...basicInfo,
      [name]: value
    })
     // Pass the updated basicInfo data to the parent component
    handleBasicInfo({ ...basicInfo, [name]: value });
  }
  return (
    <div>
      <div className="flex mt-5 ml-10 mr-20 ">

        <div className="flex flex-col  ml-5 mr-20">
          {/* property type */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Property Type
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="propertyType"
              value={basicInfo.propertyType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              {/* Add other property types as needed */}
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col ">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Price
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 
             border border-solid border-gray-400 rounded-lg"
              type="number"
              name="price"
              placeholder="Example: 1000"
              value={basicInfo.price}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* property age */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Property Age
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="propertyAge"
              value={basicInfo.propertyAge}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Property Age</option>
              <option value="New">New</option>
              <option value="Under 5 Years">Under 5 Years</option>
              <option value="5-10 Years">5-10 Years</option>
              <option value="10-20 Years">10-20 Years</option>
              <option value="20+ Years">20+ Years</option>
              {/* Add other property age ranges as needed */}
            </select>
          </div>

          {/* property description */}
          <div className="flex flex-col ">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Property Description
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 pr-56 
             border border-solid border-gray-400 rounded-lg"
              type="text"
              name="propertyDescription"
              value={basicInfo.propertyDescription}
              onChange={handleInputChange}
              required
            />
          </div>

        </div>

        <div className="flex flex-col  ml-10 mr-10">
          {/* Negotiable */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
            Negotable
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
            border border-solid border-gray-400 rounded-lg"
              name="negotiable"
              value={basicInfo.negotiable}
              onChange={handleInputChange}
              required
            >
              <option value="">Selece Negotiable</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* Ownership */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Ownership
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="ownership"
              value={basicInfo.ownership}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Ownership Type</option>
              <option value="Freehold">Freehold</option>
              <option value="Leasehold">Leasehold</option>
              {/* Add other ownership types as needed */}
            </select>
          </div>
          {/* Property Approved */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Property Approved
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="propertyApproved"
              value={basicInfo.propertyApproved}
              onChange={handleInputChange}
              required
            >
              <option value="">Property Approved?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/*  Bank Loan */}
          <div className="flex flex-col">
            <label className="text-gray-500 my-1 text-lg font-semibold">
              Bank Loan
            </label>
            <select
              className="mt-1 mb-4 pl-4 py-3 pr-56 text-gray-500
              border border-solid border-gray-400 rounded-lg"
              name="bankLoan"
              value={basicInfo.bankLoan}
              onChange={handleInputChange}
              required
            >
              <option value="">Bank Loan </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>


        </div>
      </div>
      
    </div>
  )
}
export default BasicInfoStep