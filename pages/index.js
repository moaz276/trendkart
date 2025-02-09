import Navbar from '../components/Navbar';
import OffersSection from "../components/OffersSection";
import Categories from '../components/Categories';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <OffersSection />
      <Categories />
      <div className="container">
        <h2>تصفح المزيد</h2>
        <div className="links">
          <Link href="/products">المنتجات</Link>
          <Link href="/auth/login">تسجيل الدخول</Link>
          <Link href="/auth/signup">التسجيل</Link>
        </div>
      </div>
    </div>
  );
}