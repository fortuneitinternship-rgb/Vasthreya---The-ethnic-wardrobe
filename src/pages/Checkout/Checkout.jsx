import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const handleOrder = (event) => {

    event.preventDefault();

    alert("Your order has been placed successfully!");

    navigate("/track-order");
  };

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>Complete Your Purchase</p>

          <h1>
            Checkout
          </h1>

        </div>

        <div className="row g-4">

          {/* Delivery */}

          <div className="col-lg-7">

            <div className="checkout-card">

              <h2>
                Delivery Information
              </h2>

              <form onSubmit={handleOrder}>

                <div className="row">

                  <div className="col-md-6">

                    <label>
                      First Name
                    </label>

                    <input
                      type="text"
                      required
                    />

                  </div>

                  <div className="col-md-6">

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      required
                    />

                  </div>

                </div>


                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  required
                />


                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                />


                <label>
                  Address
                </label>

                <textarea
                  rows="4"
                  required
                ></textarea>


                <div className="row">

                  <div className="col-md-4">

                    <label>
                      City
                    </label>

                    <input
                      type="text"
                      required
                    />

                  </div>

                  <div className="col-md-4">

                    <label>
                      State
                    </label>

                    <input
                      type="text"
                      required
                    />

                  </div>

                  <div className="col-md-4">

                    <label>
                      PIN Code
                    </label>

                    <input
                      type="text"
                      required
                    />

                  </div>

                </div>


                <h2 className="payment-title">
                  Payment Method
                </h2>


                <label className="payment-method">

                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  Cash On Delivery

                </label>


                <label className="payment-method">

                  <input
                    type="radio"
                    name="payment"
                  />

                  UPI / Online Payment

                </label>


                <button
                  type="submit"
                  className="vasthreya-btn full-btn"
                >
                  PLACE ORDER
                </button>

              </form>

            </div>

          </div>


          {/* Order Summary */}

          <div className="col-lg-5">

            <div className="cart-summary">

              <h2>
                Your Order
              </h2>

              <div>
                <span>
                  Royal Banarasi Silk Saree
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

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;