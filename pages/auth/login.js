import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <h1>تسجيل الدخول</h1>
        <form className="auth-form">
          <input type="email" placeholder="البريد الإلكتروني" required />
          <input type="password" placeholder="كلمة المرور" required />
          <button type="submit">تسجيل الدخول</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}