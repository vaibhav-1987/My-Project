  
const PropertyCard = ({obj})=>{
    // console.log(obj)
    const {PPID ,image,property,contact,area,views,status,daysLeft,action} = obj
    // console.log(PPID)
    return(
        <div  className=" grid grid-cols-9 gap-4  my-4  text-center 
         bg-white shadow-lg rounded-lg">
            <p className="mx-4 p-4">{PPID}</p>
            <img
             className="p-4"
             alt="image"/>
            <p className="p-4">{property}</p>
            <p className="p-4">{contact}</p>
            <p className="p-4">{area}</p>
            <p className="p-4">{views}</p>
            <p className="p-4">{status}</p>
            <p className="p-4">{daysLeft}</p>
            <p className="p-4">{action}</p>
        </div>
    )
}

export default PropertyCard;
//   console.log(myObject); // Output the created object with random values
  