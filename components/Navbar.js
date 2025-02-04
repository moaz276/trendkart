const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">TrendKart</div>
        <input type="text" className="search-box" placeholder="ابحث هنا..." />
        <div className="icons">
          <span className="icon">👤</span> {/* أيقونة الحساب */}
          <span className="icon">🛒</span> {/* أيقونة السلة */}
        </div>
      </div>
    );
  };
  
  export default Navbar;