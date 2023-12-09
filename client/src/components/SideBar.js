import { APP_LOGO } from "../utils/constants"

const SideBar = () => {
  return (
    <div className="w-[21%]  h-[100%] fixed felx flex-col
     bg-teal-100 z-20 bg-opacity-90">

      <img
        className="w-[160px] h-[140px] mx-auto my-4 rounded-xl"
        src={APP_LOGO}
        alt="app-logo"
      />
      <ul className="my-8 ">
        <li className="text-blue-600 text-xl m-4 pt-4">
          <span className=" ml-10 mr-6"> 🏠</span>
          <span>Property</span>
        </li>
        <li className="text-lg text-gray-400 m-4 pt-4 ">
          <span className="ml-10 mr-6">🔔 </span>
          <span>Assistance</span>
        </li>
        <li className="text-lg text-gray-400 m-4 pt-4 ">
          <span className="ml-10 mr-6"> ⬇️</span>
          <span>Received Interest</span>
        </li>
        <li className="text-lg text-gray-400 m-4 pt-4 ">
          <span className="ml-10 mr-6"> ⬆️</span>
          <span>Sent Interest</span>
        </li>
        <li className="text-lg text-gray-400 m-4 pt-3 ">
          <span className="ml-10 mr-6"> 👁️</span>
          <span>Property Views</span>
        </li>
        <li className="text-lg text-gray-400 m-4 pt-3 ">
          <span className="ml-10 mr-6">🏅</span>
          <span>Tariff Plans</span>
        </li>
      </ul>


    </div>
  )
}

export default SideBar