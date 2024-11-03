

const Heading = ({title,subtitle}) => {
    return (
        <div className="text-center my-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-sm text-gray-400 font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;