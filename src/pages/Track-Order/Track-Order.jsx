import { useState } from "react";

function TrackOrder() {

  const [orderId, setOrderId] = useState("");
  const [showOrder, setShowOrder] = useState(false);

  const handleTrack = (event) => {

    event.preventDefault();

    if (orderId.trim() !== "") {
      setShowOrder(true);
    }
  };

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>
            Know Where Your Order Is
          </p>

          <h1>
            Track Order
          </h1>

        </div>


        <div className="track-card">

          <i className="bi bi-box-seam track-icon"></i>

          <h2>
            Track Your Order
          </h2>

          <p>
            Enter your order ID to check
            your order status.
          </p>


          <form onSubmit={handleTrack}>

            <input
              type="text"
              placeholder="Enter Order ID"
              value={orderId}
              onChange={(event) =>
                setOrderId(event.target.value)
              }
              required
            />

            <button
              type="submit"
              className="vasthreya-btn"
            >
              TRACK ORDER
            </button>

          </form>


          {showOrder && (

            <div className="order-status">

              <h3>
                Order #{orderId}
              </h3>

              <div className="status-item completed">

                <i className="bi bi-check-circle-fill"></i>

                <div>
                  <strong>
                    Order Confirmed
                  </strong>

                  <p>
                    Your order has been confirmed.
                  </p>
                </div>

              </div>


              <div className="status-item completed">

                <i className="bi bi-check-circle-fill"></i>

                <div>
                  <strong>
                    Order Packed
                  </strong>

                  <p>
                    Your order has been packed.
                  </p>
                </div>

              </div>


              <div className="status-item active">

                <i className="bi bi-truck"></i>

                <div>
                  <strong>
                    Out For Delivery
                  </strong>

                  <p>
                    Your order is on its way.
                  </p>
                </div>

              </div>


              <div className="status-item">

                <i className="bi bi-house"></i>

                <div>
                  <strong>
                    Delivered
                  </strong>

                  <p>
                    Expected delivery soon.
                  </p>
                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default TrackOrder;