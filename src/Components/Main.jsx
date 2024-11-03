import React from "react";
import Hero from "./Hero/Hero";
import Heading from "./Heading/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./Categories/Categories";


const Main = () => {
    const categories = useLoaderData()
  return (
    <div>
      <Hero></Hero>
      <Heading
        title="Welcome To Home Page"
        subtitle="Manage coffee that you have previously added as favorite. You can view ir remove them from here "
      />

    <Categories categories={categories}/>

<Outlet></Outlet>

    </div>
  );
};

export default Main;
