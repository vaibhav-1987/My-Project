

const Header = () => {
  return (
    <div
     className="absolute z-10 w-[79%] ml-[21%] h-[12%] bg-gray-50 bg-opacity-70
      border border-b-teal-100"
    >
      <div className="flex justify-between mt-[40px] mb-[40px]">
        <p className="px-5"> USER ID : 12345</p>
        <div>
          <span className="mr-2"> 👨‍💼</span>
          <span className="pr-5">user name</span>
        </div>
      </div>
    </div>
  )
}

export default Header