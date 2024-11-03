import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  const { category } = useParams();
const navigate=useNavigate()
const [coffees,setCoffees]=useState([])
useEffect(()=>{
if(category){
    
    const newCoffees =[ ...data].filter((coffee) => category == coffee.category);
    setCoffees(newCoffees)
}else{
    setCoffees(data.slice(0,6))
}
},[category,data])



  return (
<>
<div className="grid grid-cols-3 gap-4">
        {
            coffees.map(coffee=> <Card coffee={coffee}></Card>)
        }
    </div>

    <button onClick={()=> navigate('/coffee')} className="btn btn-warning my-9">View All</button>
</>
  );
};

export default Cards;
