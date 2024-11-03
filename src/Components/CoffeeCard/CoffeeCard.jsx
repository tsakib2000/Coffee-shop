import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
const CoffeeCard = ({ coffee,handleDelete }) => {
  const { pathname } = useLocation();
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee;
  return (
    <div>
   
        <div>
          <div className=" relative " >
        <Link className="card bg-base-100 h-[500px] shadow-xl transition hover:scale-105" to={`/coffeeDetails/${id}`}>
            <figure className="h-[300px] px-10 pt-10">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl w-full h-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{popularity}</p>
              <p>{rating}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>

          </Link>
          {pathname == "/dashboard" && (
        <div onClick={()=>handleDelete(id)} className="text-2xl btn cursor-pointer btn-warning rounded-full absolute -top-5 -right-5"><MdDeleteForever /></div>
      )}
          </div>

        </div>
      
    
    </div>
  );
};

export default CoffeeCard;
