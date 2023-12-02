import PropertyCard from "./PropertyCard"

// Function to generate a random PPID
function generateRandomPPID() {
  return Math.floor(Math.random() * 1000);
}

// Function to generate a random image URL (placeholder in this case)
function generateRandomImageURL() {
  // Replace this with a function that generates random image URLs
  // For example, you can use placeholder services like Lorem Picsum or Unsplash
  return 'https://via.placeholder.com/150'; // Placeholder URL
}

// Generating an array of objects with random values
const arrayOfObjects = [
  // {
  //   // PPID: generateRandomPPID(),
  //   PPID : Math.floor(Math.random() * 1000),
  //   image: generateRandomImageURL(),
  //   property: 'Property A',
  //   contact: Math.floor(Math.random()*1000000000),
  //   area: Math.floor(Math.random() * 1000),
  //   views: Math.floor(Math.random() * 10000),
  //   status: 'Active',
  //   daysLeft: Math.floor(Math.random() * 30),
  //   action: 'View'
  // },
  // {
  //   // PPID: generateRandomPPID(),
  //   PPID : Math.floor(Math.random() * 1000),
  //   image: generateRandomImageURL(),
  //   property: 'Property B',
  //   contact: Math.floor(Math.random()*1000000000),
  //   area: Math.floor(Math.random() * 1000),
  //   views: Math.floor(Math.random() * 10000),
  //   status: 'Inactive',
  //   daysLeft: Math.floor(Math.random() * 30),
  //   action: 'View'
  // },
  
  {
    PPID : Math.floor(Math.random() * 1000),
    // PPID: generateRandomPPID(),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },,
  {
  //   PPID: generateRandomPPID(),
  PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },,
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View '
  }, 
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property A',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Active',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },
  
  {
    PPID : Math.floor(Math.random() * 1000),
    // PPID: generateRandomPPID(),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },,
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },,
  {
  //   PPID: generateRandomPPID(),
  PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View'
  },,
  {
    // PPID: generateRandomPPID(),
    PPID : Math.floor(Math.random() * 1000),
    image: generateRandomImageURL(),
    property: 'Property B',
    contact: Math.floor(Math.random()*1000000000),
    area: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    status: 'Inactive',
    daysLeft: Math.floor(Math.random() * 30),
    action: 'View '
  }
  // Add more objects following the same structure as needed
];

const PropertyList = () => {
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
        arrayOfObjects.map((obj)=> (
          <PropertyCard  key={obj.PPID} obj={obj}/>
        ))
      }
      {/* <PropertyCard/> */}
    </div>
   </>

  )
}

export default PropertyList