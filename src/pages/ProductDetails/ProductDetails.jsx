import { Link, useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      category: "Sarees",
      price: 3499,
      oldPrice: 4999,
      rating: 4.8,
      description:
        "A beautiful traditional saree designed with timeless elegance. Perfect for weddings, festivals and special occasions."
    },
    {
      id: 2,
      name: "Elegant Silk Saree",
      category: "Sarees",
      price: 2899,
      oldPrice: 3999,
      rating: 4.7,
      description:
        "An elegant ethnic saree that combines traditional beauty with a graceful modern look."
    },
    {
      id: 3,
      name: "Traditional Half Saree",
      category: "Half Sarees",
      price: 4299,
      oldPrice: 5999,
      rating: 4.9,
      description:
        "A beautiful half saree created for festive celebrations and memorable occasions."
    },
    {
      id: 4,
      name: "Festive Designer Lehenga",
      category: "Lehengas",
      price: 5499,
      oldPrice: 6999,
      rating: 4.9,
      description:
        "A gorgeous designer lehenga for weddings, receptions and festive celebrations."
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="page-section">

        <div className="container text-center">

          <h1>Product Not Found</h1>

          <Link
            to="/products"
            className="vasthreya-btn"
          >
            BACK TO PRODUCTS
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="page-section">

      <div className="container">

        <div className="row g-5">

          {/* Image */}

          <div className="col-lg-6">

            <img
              src={product.image}
              alt={product.name}
              className="details-image"
            />

          </div>


          {/* Details */}

          <div className="col-lg-6 product-details">

            <p className="product-category">
              {product.category}
            </p>

            <h1>
              {product.name}
            </h1>

            <div className="details-rating">

              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>

              <span>
                {product.rating}
              </span>

            </div>

            <div className="details-price">

              <strong>
                ₹{product.price}
              </strong>

              <del>
                ₹{product.oldPrice}
              </del>

            </div>

            <p className="details-description">
              {product.description}
            </p>


            {/* Size */}

            <div className="size-selection">

              <h5>
                Select Size
              </h5>

              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>

            </div>


            {/* Buttons */}

            <div className="details-buttons">

              <Link
                to="/cart"
                className="vasthreya-btn"
              >
                <i className="bi bi-bag-plus"></i>
                ADD TO CART
              </Link>

              <Link
                to="/wishlist"
                className="wishlist-btn"
              >
                <i className="bi bi-heart"></i>
              </Link>

            </div>


            {/* Features */}

            <div className="product-features">

              <p>
                <i className="bi bi-truck"></i>
                Free delivery on orders above ₹999
              </p>

              <p>
                <i className="bi bi-arrow-repeat"></i>
                Easy returns
              </p>

              <p>
                <i className="bi bi-shield-check"></i>
                Secure payment
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;