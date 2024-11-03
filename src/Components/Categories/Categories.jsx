import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
   
  return (
    <div className="my-7"> 
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/cards/${category.category}`}
            role="tab"
            className={({isActive})=>`tab ${isActive?'tab-active':''}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
