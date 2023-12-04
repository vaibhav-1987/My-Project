import { useState } from "react"
import BasicInfoStep from "./BasicInfoStep"
import PropertyDetailsStep2 from "./PropertyDetailsStep2"
import GeneralInfoStep3 from "./GeneralInfoStep3"
import LocationInfoStep4 from "./LocationInfoStep4"

const AddNewProperty = () => {
  const [formData, setFormData] = useState({
    basicInfo: {},
    propertyDetails: {},
    generalInfo: {},
    locationInfo: {}
  })
  const [step, setStep] = useState(1)


  // Function to update the formData state with Basic Info data
  const handleBasicInfoData = (data) => {
    setFormData({
      ...formData,
      basicInfo: data
    });
  };

  // Function to update the formData state with Property Details data
  const handlePropertyDetailsData = (data) => {
    setFormData({
      ...formData,
      propertyDetails: data
    });
  };

  // Function to update the formData state with General Info data
  const handleGeneralInfoData = (data) => {
    setFormData({
      ...formData,
      generalInfo: data
    });
  };

  // Function to update the formData state with Location Info data
  const handleLocationInfoData = (data) => {
    setFormData({
      ...formData,
      locationInfo: data
    });
  };

  const handleFormSubmit = async () => {
    try {
      console.log(formData)
      // // Make a POST request to your backend endpoint with the form data
      // const response = await fetch('your-backend-url', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   const result = await response.json();
      //   // Handle successful response from the backend
      //   alert("Property added successfully");
      //   // You might want to reset the form or do other actions here
      // } else {
      //   // Handle errors if the request fails
      //   throw new Error('Failed to add property');
      // }
    } catch (error) {
      // console.error('Error:', error);
      // // Handle error scenarios (e.g., show an error message)
    }
  };
  return (
    <div className="ml-[22%] mt-[9%] absolute px-[2%] w-[78%]">
      <h1 className="text-2xl  font-bold text-gray-800">AddNewProperty</h1>
      <div className="mt-8 ml-8 flex  shadow-lg w-[95%] bg-white rounded-full ">
        {/* header */}
        {(step === 1)
          ? <div className=" ml-0 mx-auto p-2 rounded-full flex items-center  bg-blue-400">
            <p className="m-2 px-3 py-1 rounded-full bg-white ">1</p>
            <p className="ml-2 mr-6 text-xl text-white ">Basic Info</p>
          </div>
          : <div className=" ml-0 mx-auto p-2 rounded-full flex items-center  bg-white">
            <p className="m-2 px-3 py-1 rounded-full bg-teal-100 ">1</p>
            <p className="ml-2 mr-6 text-xl text-gray-400 ">Basic Info</p>
          </div>
        }

        {step === 2
          ? <div
            className=" p-2 mx-auto rounded-full flex items-center  bg-blue-400">
            <p className="m-2 px-3 py-1 rounded-full bg-white ">2</p>
            <p className="ml-2 mr-6 text-white text-xl ">Preoprty Detail</p>
          </div>
          : <div
            className=" p-2 mx-auto rounded-full flex items-center  bg-white">
            <p className="m-2 px-3 py-1 rounded-full bg-teal-100 ">2</p>
            <p className="ml-2 mr-6 text-xl text-gray-400  ">Preoprty Detail</p>
          </div>
        }

        <div className={step === 3
          ? "p-2 mx-auto rounded-full flex items-center  bg-blue-400"
          : "p-2 mx-auto rounded-full flex items-center  bg-white"}
        >
          <p className={step === 3
            ? "m-2 px-3 py-1 rounded-full bg-white "
            : "m-2 px-3 py-1 rounded-full bg-teal-100 "
          }>3</p>
          <p className={step === 3
            ? "ml-2 mr-6  text-xl text-white "
            : "ml-2 mr-6  text-xl text-gray-400 "
          }> General Info</p>
        </div>

        <div className={step === 4
          ? "p-2 mx-auto mr-0 rounded-full flex items-center  bg-blue-400"
          : "p-2 mx-auto rounded-full flex items-center  bg-white"}
        >
          <p className={step === 4
            ? "m-2 px-3 py-1 rounded-full bg-white "
            : "m-2 px-3 py-1 rounded-full bg-teal-100 "
          }>4</p>
          <p className={step === 4
            ? "ml-2 mr-6  text-xl text-white "
            : "ml-2 mr-6  text-xl text-gray-400 "
          }> Location Info</p>
        </div>

      </div>

      {/*  form body */}
      <div className="mt-10 ">

        <form
          className=" m-4 p-4 bg-white rounded-xl  "
          onSubmit={
            (e) => (e.preventDefault())
          }>
          {step === 1 &&( 
            <BasicInfoStep handleBasicInfo = {handleBasicInfoData}/>
          )}
          {step === 2 && (
            <PropertyDetailsStep2 handlePropertyDetails={handlePropertyDetailsData}/>
          )}
          {step === 3 &&( 
            <GeneralInfoStep3 handleGeneralInfo={handleGeneralInfoData}/>
          )}
          {step === 4 && (
            <LocationInfoStep4  handleLocationInfo={handleLocationInfoData}/>
          )}

          <div className="relative flex justify-center">
            <button
              className=" w-[200px] h-[60px] text-xl mx-4 my-2 px-10 py-4 bg-blue-300 rounded-full"
              onClick={() => {
                setStep(step === 1 ? 1 : step - 1);
              }}
            >
              {step === 1 ? "Cancel" : "Previous"}
            </button>
            <button
              className=" w-[200px] h-[60px] mx-4 my-2 px-10 py-4 bg-blue-700 text-white rounded-full"
              onClick={() => {
                step === 4 ? handleFormSubmit() : setStep((step % 4) + 1);
                console.log(formData)
              }}
            >
              {step === 4 ? "Add property" : "Save & Continue"}
            </button>
          </div>

        </form>


      </div>



    </div>
  )
}

export default AddNewProperty

{/* <div className=" relative flex justify-center">
            <button
              className=" mx-4 my-2 px-10 py-4  bg-blue-300 rounded-full "
              onClick={() => {
                (step == 1)
                  ? setStep(1)
                  : setStep((step) - 1)
              }}
            >
              {step == 1 ? "Cancel" : "Previous"}
            </button>
            <button
              className=" mx-4 my-2 px-10 py-4  bg-blue-700 text-white rounded-full"
              onClick={() => {
                step == 4
                  ? (alert("property added successfully"))
                  : setStep((step % 4) + 1)
              }}
            >
              {step == 4 ? "add property" : "Save & Continue"}
            </button>
          </div> */}