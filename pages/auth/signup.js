import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <h1>التسجيل</h1>
        <form className="auth-form">
          <input type="text" placeholder="الاسم الكامل" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <input type="password" placeholder="كلمة المرور" required />
          <button type="submit">إنشاء حساب</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}