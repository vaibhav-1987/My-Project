# My-Project
  REAL-ESTATE- CATALOGE  
   - amazing app build with react , node js and tailwind css
   - where user can sign-in and look for the real-estate-properties  
   - also able to find their required property by using search feature  
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


