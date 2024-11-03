import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard/CoffeeCard";




const Coffees = () => {
   const data = useLoaderData()

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.map(coffee=> <CoffeeCard key={coffee.id} coffee={coffee}/>)
            }
        </div>
    );
};

export default Coffees;