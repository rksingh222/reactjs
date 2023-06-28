//In earlier version
function App(){
  return (
    <div>
    <Route path ="/welcome">
    <Welcome />
    </Route>
    <Route path="/products">
    <Products />
    </Route>
    </div>
    );
}


to use the router facility in react
npm install react-router-dom
search react router 
in App.js import
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import Homepage from './pages/home';
/ means that its for the domain
//create a folder named pages(you could name it whatever you want) in the same directory as App.js
/ how to use createBrowserRouter
// also import RouterProvider

const routeDefinitions = createRoutesFromElements(
<Route>
  <Route path="/" element={<HomePage />} />
  <Route path="/products" element={<ProductsPage />} />
</Route>
);

const router = createBrowserRouter(routeDefinitions);

function App(){
  return <RouterProvider router={router} />;
}


//pages/home.js
function HomePage(){
return <h1>myhomepage</h1>;
}

export default HomePage

run npm start 
visiting localhost:3000 will run the homepage
