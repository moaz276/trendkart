import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Orders() {
  return (
    <div>
      <Navbar />
      <div className="orders-container">
        <h1>طلباتي</h1>
        <div className="orders-list">
          {/* هنا يمكنك عرض قائمة الطلبات */}
        </div>
      </div>
      <Footer />
    </div>
  );
}