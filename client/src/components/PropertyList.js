// import { useEffect, useState , useContext } from "react";
import PropertyCard from "./PropertyCard"
// import UserContext from "./UserContext";
import { ColorRing } from "react-loader-spinner";


const PropertyList = ({propertyInfo}) => {
  // const [propertyData, setPropertyData] = useState(null);
  // const {loggedInUser} = useContext(UserContext);
  // const fetchData = async () => {
  //  try{ 
  //     const res = await fetch("http://localhost:5050/api/v1/property/", {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': `bearer ${loggedInUser.token}`
  //     }
  //   });
  //   // console.log(res)
  //   const data = await res.json();
  //   console.log(data)
  //   setPropertyData(data.propertiesList)
  //   // setPropertyInfo(data.propertiesList)
  // }catch(err){
  //   console.log(err)
  // }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  if(!propertyInfo) return <ColorRing/> ;

  return (
    <>
      <div className=" grid grid-cols-9 gap-4  my-4  text-center 
     text-blue-800 bg-white shadow-lg rounded-lg">
        <p className="mx-4 p-4">PPID</p>
        <p className="mx-4 p-4">Image</p>
        <p className="mx-4 p-4">Property</p>
        <p className="mx-4 p-4">Contact</p>
        <p className="mx-4 p-4">Area</p>
        <p className="mx-4 p-4">Views</p>
        <p className="mx-4 p-4">Status</p>
        <p className="mx-4 p-4">DaysLeft</p>
        <p className="mx-4 p-4">Action</p>
      </div>
      <div >
        {
          propertyInfo && propertyInfo.map((obj) => (
            <PropertyCard key={obj._id} obj={obj} />
          ))
        }

      </div>
    </>

  )
}

export default PropertyList