# My-Project

- Project: Real Estate Catalog

- Description:

   Developed a comprehensive Real Estate Catalog web application facilitating property management, leveraging React, Node.js, and Cloudinary. The app incorporates user authentication, allowing authenticated users to view property listings on the home page and add new properties via a multi-step form, complete with image upload functionality using Cloudinary.

- Key Features:

   - User Authentication:
      Implemented a secure user authentication system to manage user access and provide personalized experiences.
   - Property Listing:
      Displayed a curated list of properties on the home page for authenticated users.
   - Multi-step Property Addition Form:
      Created a multi-step form enabling users to seamlessly add new properties with detailed information.
   - Image Upload with Cloudinary:
      Integrated Cloudinary for efficient image uploading within the property addition form.
   - Dynamic Display:
      New properties added through the form immediately appear on the home page for users to view.

# Technologies Used:

   - Frontend: React
   - Backend: Node.js
   - Image Upload: Cloudinary

   - Contributions:

      Engineered the user authentication system to manage user access securely.
      Designed and developed the multi-step property addition form for a smooth user experience.
      Integrated Cloudinary for efficient image upload and management within the application.
      
- Additional Details:

Ensured data security and user privacy through robust authentication methods.
Utilized React to create a dynamic and responsive user interface for seamless user interaction.
Leveraged Cloudinary for efficient image storage and retrieval, enhancing the property listing experience.

# Backend

 - created backend server using express
 - built user Schema and Add new property Schema using mongoose
 - developed backend logic for  user registration
 - devloped backend login logic for user sign-in using jsnwebtoken 
 - implemented whole login & sign-up process of user
 - built a logic for creating newProperties in the database using 
    AddNewProperty Schema
 - develped backend api's required for the project.
# Frontend 

 - developed front-pages with the protected routes.    
 - build sign-in and Sign-up pages using Tailwind css
 - used react-router for navigation and user can access Listing-page after login
 - used outlet and children routes , ReactContext for protected routes
 - listing page and property listing page was developed usng dummy data..
 - developed add new property pages with multi-step form using tailwind css..
 - added sign-out feature using ReactContext ...
 - integrated backend api's in the front-end components using fetch api
 - added search feature in the homepage ;
 
# project outline 
 
  - user sign-up
  - user sign-in
  - home page (user can access this page only after log-in)
        -header
        -sidebar
        -body (outlet = children routes according to path)
        {
            - search bar , add property button
            - proptery list 
               - property card
        }
        {
             - add new property page
              - multi-step form
              - save & continue  , submit buttons
        }


