import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p><strong>Category:</strong> {props.category}</p>
      <p><strong>Brand:</strong> {props.brand}</p>
      <p><strong>Price:</strong> Rs. {props.price}</p>
      <p><strong>Rating:</strong> ⭐ {props.rating}</p>
      <p><strong>Stock:</strong> {props.stock}</p> {
        props.available ? <button>Add to Cart</button> : <p className="out">Out of Stock</p>
      }

    </div>
  );
}

export default ProductCard;