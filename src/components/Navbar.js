function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">RFID Solutions</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
} 