import { Link } from "react-router-dom";

function Profile() {

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>
            Your Vasthreya Account
          </p>

          <h1>
            My Profile
          </h1>

        </div>


        <div className="profile-card">

          <div className="profile-avatar">

            <i className="bi bi-person-fill"></i>

          </div>

          <h2>
            Welcome to Vasthreya
          </h2>

          <p>
            Your account information
          </p>


          <div className="profile-information">

            <div>
              <span>
                Full Name
              </span>

              <strong>
                Vasthreya Customer
              </strong>
            </div>

            <div>
              <span>
                Email
              </span>

              <strong>
                customer@example.com
              </strong>
            </div>

            <div>
              <span>
                Phone
              </span>

              <strong>
                +91 98765 43210
              </strong>
            </div>

          </div>


          <div className="profile-buttons">

            <Link
              to="/track-order"
              className="vasthreya-btn"
            >
              TRACK ORDERS
            </Link>

            <Link
              to="/wishlist"
              className="profile-outline-btn"
            >
              MY WISHLIST
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;