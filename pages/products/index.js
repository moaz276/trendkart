import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const products = [
  { id: 1, name: 'جهاز كمبيوتر محمول', price: 3000, image: '/laptop.jpg' },
  { id: 2, name: 'هاتف ذكي', price: 1500, image: '/phone.jpg' },
  { id: 3, name: 'سماعات لاسلكية', price: 500, image: '/headphones.jpg' },
];

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="products-container">
        <h1>المنتجات</h1>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}