# My-Project

added dev set up needed for project 
  dev set up for backend - 
    - node , express , mongoose , jsonwebtoken , cors 
  dev set up for frontend -
    - create-react-app as a bundler fro react
    - react , reactDOM   through npm
    - hooks (useState , useEffect , useContext)
    - reactRouter for navigation.. 
# Backend

 created backend server using express
 - built user Schema and Add new property Schema using mongoose
 developed backend logic for  user registration
 devloped backend login logic for user sign-in using jsnwebtoken 
 - implemented whole login & sign-up process of user

# Frontend 

 - developed front-pages with the protected routes.    
 - build sign-in and Sign-up pages using Tailwind css
 - used react-router for navigation and user can access Listing-page after login
 - used outlet and children routes , ReactContext for protected routes
 - listing page and property listing page was developed usng dummy data..
 - developed add new property pages with multi-step form using tailwind css..
 - added sign-out feature using ReactContext ..

# project outline 
 
  - user sign-up
  - user sign-in
  - listing page (user can access this page only after log-in)
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


