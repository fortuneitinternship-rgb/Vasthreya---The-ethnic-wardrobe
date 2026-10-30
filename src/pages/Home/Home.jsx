
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {

  const featuredProducts = [
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      category: "Sarees",
      price: 3499,
      oldPrice: 4999,
      rating: 4.8
    },
    {
      id: 2,
      name: "Elegant Silk Saree",
      category: "Sarees",
      price: 2899,
      oldPrice: 3999,
      rating: 4.7
    },
    {
      id: 3,
      name: "Festive Designer Lehenga",
      category: "Lehengas",
      price: 5499,
      oldPrice: 6999,
      rating: 4.9
    },
    {
      id: 4,
      name: "Classic Embroidered Kurti",
      category: "Kurtis",
      price: 1499,
      oldPrice: 1999,
      rating: 4.6
    }
  ];

  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-overlay">

          <div className="container">

            <div className="hero-content">

              <p className="hero-small">
                Where Tradition Begins
              </p>

              <h1>
                VASTHREYA
              </h1>

              <h2>
                The Ethnic Wardrobe
              </h2>

              <div className="hero-flower">
                <i className="bi bi-flower3"></i>
              </div>

              <p className="hero-tagline">
                Where Tradition Meets Timeless Elegance
              </p>

              <Link
                to="/products"
                className="hero-button"
              >
                SHOP NOW
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* COLLECTIONS */}

      <section className="collection-section">

        <div className="container">

          <div className="section-heading">

            <p>Discover Our Collection</p>

            <h2>Explore Our Collections</h2>

            <span>
              Discover elegant ethnic wear designed
              for every special occasion.
            </span>

          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <Link to="/products" className="collection-card">
                <div className="collection-overlay">
                  <h3>Sarees</h3>
                  <span>Explore Collection</span>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="/products" className="collection-card">
                <div className="collection-overlay">
                  <h3>Half Sarees</h3>
                  <span>Explore Collection</span>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="/products" className="collection-card">
                <div className="collection-overlay">
                  <h3>Lehengas</h3>
                  <span>Explore Collection</span>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="/products" className="collection-card">
                <div className="collection-overlay">
                  <h3>Kurtis</h3>
                  <span>Explore Collection</span>
                </div>
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="featured-section">

        <div className="container">

          <div className="section-heading">

            <p>Handpicked For You</p>

            <h2>Featured Collection</h2>

          </div>

          <div className="row g-4">

            {featuredProducts.map((product) => (

              <div
                className="col-lg-3 col-md-6"
                key={product.id}
              >

                <ProductCard product={product} />

              </div>

            ))}

          </div>

          <div className="text-center mt-5">

            <Link to="/products" className="vasthreya-btn">
              VIEW ALL PRODUCTS
            </Link>

          </div>

        </div>

      </section>


      {/* OFFER */}

      <section className="offer-section">

        <div className="container">

          <p>Special Celebration Offer</p>

          <h2>FLAT 10% OFF</h2>

          <h3>On Your First Order</h3>

          <Link to="/products" className="hero-button">
            SHOP NOW
          </Link>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-section">

        <div className="container">

          <div className="section-heading">

            <p>The Vasthreya Promise</p>

            <h2>Why Choose Vasthreya?</h2>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="why-card">

                <i className="bi bi-gem"></i>

                <h3>Elegant Designs</h3>

                <p>
                  Beautiful ethnic designs inspired
                  by India's rich traditions.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="why-card">

                <i className="bi bi-heart"></i>

                <h3>Quality Collection</h3>

                <p>
                  Carefully selected products designed
                  for special moments.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="why-card">

                <i className="bi bi-truck"></i>

                <h3>Easy Shopping</h3>

                <p>
                  Simple shopping experience with
                  secure checkout and delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="newsletter-section">

        <div className="container">

          <h2>Join The Vasthreya Family</h2>

          <p>
            Get updates about new collections,
            offers and ethnic fashion.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              SUBSCRIBE
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
