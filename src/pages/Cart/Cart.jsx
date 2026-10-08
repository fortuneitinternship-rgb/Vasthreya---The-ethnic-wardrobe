import { Link } from "react-router-dom";

function Cart() {

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>Your Shopping Bag</p>

          <h1>
            Shopping Cart
          </h1>

        </div>

        <div className="row g-4">

          {/* Cart Product */}

          <div className="col-lg-8">

            <div className="cart-item">

              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80"
                alt="Royal Banarasi Silk Saree"
              />

              <div className="cart-product">

                <p>
                  Sarees
                </p>

                <h3>
                  Royal Banarasi Silk Saree
                </h3>

                <strong>
                  ₹3,499
                </strong>

                <div className="quantity">

                  <button>-</button>

                  <span>1</span>

                  <button>+</button>

                </div>

              </div>

              <button
                className="remove-cart"
                type="button"
              >
                <i className="bi bi-trash"></i>
              </button>

            </div>

          </div>


          {/* Summary */}

          <div className="col-lg-4">

            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>

              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  ₹3,499
                </strong>
              </div>

              <div>
                <span>
                  Shipping
                </span>

                <strong>
                  Free
                </strong>
              </div>

              <hr />

              <div className="total">

                <span>
                  Total
                </span>

                <strong>
                  ₹3,499
                </strong>

              </div>

              <Link
                to="/checkout"
                className="vasthreya-btn checkout-btn"
              >
                PROCEED TO CHECKOUT
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cart;