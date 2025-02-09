import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const products = [
  { id: 1, name: 'جهاز كمبيوتر محمول', price: 3000, image: '/laptop.jpg', description: 'جهاز كمبيوتر محمول عالي الأداء.' },
  { id: 2, name: 'هاتف ذكي', price: 1500, image: '/phone.jpg', description: 'هاتف ذكي بشاشة كبيرة وبطارية طويلة الأمد.' },
  { id: 3, name: 'سماعات لاسلكية', price: 500, image: '/headphones.jpg', description: 'سماعات لاسلكية بجودة صوت عالية.' },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <h1>{product.name}</h1>
        <p className="product-price">{product.price} ر.س</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart">أضف إلى السلة</button>
      </div>
      <Footer />
    </div>
  );
}