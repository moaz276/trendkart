const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} ر.س</p>
        <button className="add-to-cart">أضف إلى السلة</button>
      </div>
    );
  };
  
  export default ProductCard;