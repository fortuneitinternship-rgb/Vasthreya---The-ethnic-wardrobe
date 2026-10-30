
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="notification-bar">
        Flat 10% Off on Your First Order — Shop Now
      </div>
      <nav className="navbar navbar-expand-lg vasthreya-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="src/assets/images/logo1.png"
              alt="Vasthreya"
              className="vasthreya-logo"
            />
          </Link>

          {/* Mobile Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#vasthreyaNavbar"
            aria-controls="vasthreyaNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          <div
            className="collapse navbar-collapse"
            id="vasthreyaNavbar"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  SAREES
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  HALF SAREES
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  LEHENGAS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  KURTIS
                </Link>
              </li>
            </ul>
            <div className="navbar-search">
              <input
                type="text"
                placeholder="Search products..."
              />

              <button type="button" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="navbar-actions">

              <Link to="/track-order">
                <i className="bi bi-box-seam"></i>
                Track Order
              </Link>

              <Link to="/wishlist">
                <i className="bi bi-heart-fill"></i>
                Wishlist
              </Link>

              <Link to="/cart">
                <i className="bi bi-bag-fill"></i>
                Cart
              </Link>

              {/* Login / Register */}
              <Link to="/login" className="login-register-link">
                <i className="bi bi-person-circle"></i>
                Login / Register
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
