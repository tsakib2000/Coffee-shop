import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import { useState } from "react";




const Coffees = () => {
   const data = useLoaderData()
const [coffees,setCoffees]=useState(data)
const handleSort =sortBy=>{
    if( sortBy == 'popularity'){
        const sorted = [...data].sort((a,b)=>b.popularity-a.popularity)
        setCoffees(sorted)
    }else if(sortBy == 'rating'){
        const sorted = [...data].sort((a,b)=>b.rating-a.rating)
        setCoffees(sorted)
    }
}
    return ( 
        <> 
        <div className="flex justify-between items-center my-12">
            <div><h1 className="text-3xl font-thin">Sort coffee&apos;s by Popularity & Rating-&gt;</h1></div>
            <div className="flex gap-6">
                <button onClick={()=>handleSort('popularity')} className="btn btn-warning transition hover:scale-105">Sort by popularity</button>
                <button onClick={()=>handleSort('rating')} className="btn btn-warning  transition hover:scale-105">Sort by rating</button>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {
                coffees.map(coffee=> <CoffeeCard key={coffee.id} coffee={coffee}/>)
            }
        </div>
        </>
    );
};

export default Coffees;