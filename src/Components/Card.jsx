

const Card = ({coffee}) => {
    const {
        name,
        image,
        category,
        origin,
        type,
        id,
        rating,
        popularity,
      } = coffee;
    return (
        <div>
          
            <div className="card bg-base-100 h-[500px] shadow-xl transition hover:scale-105 ">
  <figure className="h-[300px] px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-full h-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;