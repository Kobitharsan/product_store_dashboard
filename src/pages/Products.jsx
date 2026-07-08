import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <div className="container"> {
        products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            brand={product.brand}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            available={product.available}
            />
        ))
      }
    </div>
  );
}

export default Products;