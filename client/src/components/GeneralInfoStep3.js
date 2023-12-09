import { useState } from "react"
import axios from "axios"
import {ColorRing} from "react-loader-spinner"
const GeneralInfoStep3 = ({ handleGeneralInfo }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    postedBy: "",
    featuredPackage: "",
    mobile: "",
    saleType: "",
    ppdPackage: "",
    photo: null
  })
  const [loading , setLoading] = useState(false);
  const cloudName = "di6m4nppw"
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
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0]; // Get the uploaded file
  //   setGeneralInfo({
  //     ...generalInfo,
  //     photo: file // Update the photo property with the file object
  //   });
  //   handleGeneralInfo({
  //     ...generalInfo,
  //     photo: file
  //   })
  // };
  const uploadFile = async (image)=>{
    const formData = new FormData();
    formData.append("file",image);
    formData.append("upload_preset","images_preset");
    try{
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
      const res = await axios.post(api,formData)
      console.log(res)
      const { secure_url } = res.data;
      return secure_url
    }catch(err){
      console.error(err)
    }

  }
  const handleImage = async (e)=>{
    setLoading(true)
    const imageFile = e.target.files[0];
    const imageUrl = await uploadFile(imageFile);
    setGeneralInfo({
      ...generalInfo,
      photo : imageUrl
    })
    handleGeneralInfo({
      ...generalInfo,
      photo : imageUrl
    })

    setLoading(false)
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
              Photo
            </label>
            <input
              className="mt-1 mb-4 pl-4 py-3 text-gray-500"
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleImage}
              required
            />
            {/* loading spinner */}
             {loading && <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />}
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
              type="number"
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