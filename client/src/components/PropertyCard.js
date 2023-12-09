import { useState } from "react";

const PropertyCard = ({obj})=>{
  const [showImage , setShowImage] = useState(false);
    const {ppdId ,area,views,status,daysLeft} = obj
    const {propertyType} = obj.basicInfo;
    const {mobile,photo} = obj.generalInfo
    // console.log(PPID)
    return(
        <>
        <div  className=" grid grid-cols-9 gap-4  my-4  text-center items-center
         bg-white shadow-lg rounded-lg">
            <p className="mx-4 p-4">{ppdId}</p>
            <img
             className="  w-8 h-8 mx-auto"
             src={photo}
             alt="image"/>
            <p className="p-4">{propertyType}</p>
            <p className="p-4">{mobile}</p>
            <p className="p-4">{area}</p>
            <p className="p-4">{views}</p>
            <p className="p-4">{status}</p>
            <p className="p-4">{daysLeft}</p>
            <p className="p-4 cursor-pointer"
            onClick={()=>setShowImage(!showImage)}>{"👁️ view"}</p>
        </div>
        {
            showImage && 
            <div className="">
                <img
                className="w-full h-full"
                src={photo}
                alt="property-photo" />
            </div>
        }
        </>
    )
}

export default PropertyCard;
//   console.log(myObject); // Output the created object with random values
  