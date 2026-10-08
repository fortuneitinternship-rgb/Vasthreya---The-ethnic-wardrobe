import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="vasthreya-footer">

      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h3>VASTHREYA</h3>

            <h6>The Ethnic Wardrobe</h6>

            <p>
              Where tradition meets timeless elegance.
              Discover beautiful ethnic wear designed
              for every special occasion.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>

          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Customer Service</h5>

            <Link to="/track-order">
              Track Order
            </Link>

            <Link to="/contact-us">
              Contact Us
            </Link>

            <Link to="/profile">
              My Profile
            </Link>

            <Link to="/checkout">
              Checkout
            </Link>

          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#pinterest" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>

              <a href="#youtube" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          © 2026 VASTHREYA — The Ethnic Wardrobe.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;