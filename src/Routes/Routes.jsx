import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import Main from "../Components/Main";

import DashBoard from "../Components/DashBoard";
import Coffees from "../Components/Coffees";
import Cards from "../Components/Cards/Cards";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Main></Main>,
            loader:()=>fetch('/categories.json'),
            children:[
                {
                    path:'/',
                    element:<Cards></Cards>,
                    loader:()=>fetch('../coffees.json')
                    
                },
                {
                    path:'/cards/:category',
                    element:<Cards></Cards>,
                    loader:()=>fetch('../coffees.json')
                    
                }
            ]


        },
        {
            path:'/coffee',
            element:<Coffees></Coffees>,
            loader:()=>fetch('/coffees.json')
        },
        {
            path:'/dashboard',
            element:<DashBoard></DashBoard>
        },
        {
            path:'/coffeeDetails/:coffeeID',
            element:<CoffeeDetails/>,
            loader:()=>fetch('/coffees.json')
        }
      ]
    },
  ]);

  export default router