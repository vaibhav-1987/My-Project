import { Link } from "react-router-dom"
import PropertyList from "./PropertyList"
import { useEffect, useState , useContext } from "react";
import UserContext from "./UserContext";

const Body = () => {
 
  const [propertyData, setPropertyData] = useState(null);
  const [searchedProperties , setSearchedProperties] = useState(null)
  const [serachText, setSearchText] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const handleSearch = () => {
    if (serachText === "") {
      setSearchedProperties(propertyData)
    }
    else {
      const filteredProperties = propertyData.filter((p) => (
        p.ppdId === serachText
      ))
      setSearchedProperties(filteredProperties)
      // setSearchText("")
    }
  }

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/v1/property/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `bearer ${loggedInUser.token}`
        }
      });
      // console.log(res)
      const data = await res.json();
      console.log(data)
      setPropertyData(data.propertiesList)
      setSearchedProperties(data.propertiesList)
      // setPropertyInfo(data.propertiesList)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="ml-[21%] mt-[6%] absolute w-[79%] p-[2%] h-[85%] 
     bg-gray-50  bg-opacity-70">

      <div className="flex justify-between mb-8 ml-2 mt-2">
        <div>
          <input
            type="text"
            placeholder="Seach by PPID"
            className=" px-4 py-3 rounded-l-full shadow-xl
           border-r-slate-200 border-white "
            value={serachText}
            onChange={(e) => { setSearchText(e.target.value) }}
          />
          <button
            className=" px-4 py-[11px] bg-slate-50 rounded-r-full shadow-xl border border-white"
            onClick={handleSearch}
          >🔍</button>
        </div>
        <button className="px-6 py-3 bg-blue-400 rounded-r-full rounded-l-full text-white "
        > <Link to="/add">+ Add Property</Link>
        </button>
      </div>
      <div>
        <PropertyList
          propertyInfo={searchedProperties}
        />
      </div>
    </div>
  )
}

export default Body