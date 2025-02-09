import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">TrendKart</div>
      <input type="text" className="search-box" placeholder="ابحث هنا..." />
      <div className="icons">
        <Link href="/auth/login">👤</Link>
        <Link href="/cart">🛒</Link>
      </div>
    </div>
  );
};

export default Navbar;