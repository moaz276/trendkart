import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>سلة التسوق</h1>
        <div className="cart-items">
          {/* هنا يمكنك عرض العناصر في السلة */}
        </div>
        <button className="checkout-button">إتمام الشراء</button>
      </div>
      <Footer />
    </div>
  );
}