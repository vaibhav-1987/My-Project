import { Outlet, Link } from "react-router-dom"
import AddNewProperty from "./AddNewProperty"
import PropertyList from "./PropertyList"
const Body = () => {
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
          />
          <button className=" px-3 py-3 bg-white rounded-r-full shadow-xl border border-white">🔍</button>
        </div>
        <button className="px-6 py-3 bg-blue-400 rounded-r-full rounded-l-full text-white "
        > <Link to="/add">+ Add Property</Link></button>
      </div>
      <div>
        <PropertyList />
      </div>
    </div>
  )
}

export default Body