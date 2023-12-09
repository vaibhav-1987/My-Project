import PropertyCard from "./PropertyCard"
import { ColorRing } from "react-loader-spinner";


const PropertyList = ({ propertyInfo }) => {

  if (!propertyInfo) return <ColorRing />;

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