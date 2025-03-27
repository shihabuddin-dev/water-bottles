const Bottle = ({bottle , handleAddToCart}) => {
    const {img,name, seller,price, stock,ratings,ratingsCount,shipping}=bottle
    return (
        <div className="border-2 p-2 rounded-xl border-gray-500">
            <img className="pb-2 rounded-t-xl" src={img} alt="" />
            <h3 className="text-xl">{name}</h3>
            <h4 className="font-bold">Price: ${price} </h4>
            <p>seller: {seller} stock: {stock}</p>
            <p>Ratings: {ratings}/{ratingsCount} || Sold: {shipping}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};
export default Bottle;