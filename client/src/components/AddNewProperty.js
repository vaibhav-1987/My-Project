import { useState } from "react"

const AddNewProperty = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="ml-[22%] mt-[9%] fixed px-[2%] w-[78%]">
      <h1 className="text-2xl  font-bold text-gray-800">AddNewProperty</h1>
      <div className="mt-8 ml-8 flex  shadow-lg w-[95%] bg-white rounded-full ">
        {/* header */}
        {(step == 1)
          ? <div className=" ml-0 mx-auto p-2 rounded-full flex items-center  bg-blue-400">
            <p className="m-2 px-3 py-1 rounded-full bg-white ">1</p>
            <p className="ml-2 mr-6 text-xl text-white ">Basic Info</p>
          </div>
          : <div className=" ml-0 mx-auto p-2 rounded-full flex items-center  bg-white">
            <p className="m-2 px-3 py-1 rounded-full bg-teal-100 ">1</p>
            <p className="ml-2 mr-6 text-xl text-gray-400 ">Basic Info</p>
          </div>
        }

        {step == 2
          ? <div
            className=" p-2 mx-auto rounded-full flex items-center  bg-blue-400">
            <p className="m-2 px-3 py-1 rounded-full bg-white ">2</p>
            <p className="ml-2 mr-6 text-white ">Preoprty Detail</p>
          </div>
          : <div
            className=" p-2 mx-auto rounded-full flex items-center  bg-white">
            <p className="m-2 px-3 py-1 rounded-full bg-teal-100 ">2</p>
            <p className="ml-2 mr-6 text-gray-400 ">Preoprty Detail</p>
          </div>
        }

        <div className={step == 3
          ? "p-2 mx-auto rounded-full flex items-center  bg-blue-400"
          : "p-2 mx-auto rounded-full flex items-center  bg-white"}
        >
          <p className={step == 3
            ? "m-2 px-3 py-1 rounded-full bg-white "
            : "m-2 px-3 py-1 rounded-full bg-teal-100 "
          }>3</p>
          <p className={step == 3
            ? "ml-2 mr-6  text-xl text-white "
            : "ml-2 mr-6  text-xl text-gray-400 "
          }> General Info</p>
        </div>

        <div className={step == 4
          ? "p-2 mx-auto mr-0 rounded-full flex items-center  bg-blue-400"
          : "p-2 mx-auto rounded-full flex items-center  bg-white"}
        >
          <p className={step == 4
            ? "m-2 px-3 py-1 rounded-full bg-white "
            : "m-2 px-3 py-1 rounded-full bg-teal-100 "
          }>4</p>
          <p className={step == 4
            ? "ml-2 mr-6  text-xl text-white "
            : "ml-2 mr-6  text-xl text-gray-400 "
          }> General Info</p>
        </div>

      </div>

      {/*  form body */}
      <div className="mt-10">

        <form 
        className=" m-4 p-4 bg-white rounded-xl "
        onSubmit={
          (e)=> (e.preventDefault())
        }>
          <div className="flex justify-around ">
            <div className="flex flex-col">
            <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
             
            </div>
            <div className="flex flex-col">
            <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 my-1 text-lg font-semibold"
                > Property Type</label>
                <input
                  className="ml-0 mt-1 mb-4 pl-4 py-3 pr-20 
                  border border-solid border-gray-400 rounded-lg "
                  type="text"
                  placeholder="select property type" />
              </div>
             
            </div>
          </div>
          <div className=" relative flex justify-center">
            <button
              className=" ml-4 my-2 px-10 py-4  bg-blue-300 rounded-full "
              onClick={() => {
                (step == 1)
                  ? setStep(1)
                  : setStep((step) - 1)
              }}
            >
              {step == 1 ? "Cancel" : "Previous"}
            </button>
            <button
              className=" my-2 mr-2 px-10 py-4  bg-blue-700 text-white rounded-full"
              onClick={() => {
                step == 4
                  ?(  alert("property added successfully"))
                  : setStep((step % 4) + 1)
              }}
            >
              {step == 4 ? "Submit" : "Save & Continue"}
            </button>
          </div>
        </form>


      </div>



    </div>
  )
}

export default AddNewProperty