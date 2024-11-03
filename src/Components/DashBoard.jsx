import { useEffect, useState } from "react";
import Heading from "./Heading/Heading";
import { getFavorite, removeFavorite } from "../Utilities";
import CoffeeCard from './CoffeeCard/CoffeeCard';


const DashBoard = () => {

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorite = getFavorite();
    setCoffees(favorite);
  }, []);
  const handleDelete=id=>{
      removeFavorite(id)
      const favorite = getFavorite();
      setCoffees(favorite);
  }

  return (
    <>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffee that you have previously added as favorite. You can view ir remove them from here"
        }
      />
      <div className="grid grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard handleDelete={handleDelete}  key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default DashBoard;
