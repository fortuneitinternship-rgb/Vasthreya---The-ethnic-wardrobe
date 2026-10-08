import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (event) => {

    event.preventDefault();

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <section className="auth-section">

      <div className="auth-card">

        <div className="auth-heading">

          <p>
            Join Vasthreya
          </p>

          <h1>
            Create Account
          </h1>

          <span>
            Create your account and start shopping.
          </span>

        </div>

        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            required
          />


          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />


          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            required
          />


          <label>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            required
          />


          <button
            type="submit"
            className="vasthreya-btn full-btn"
          >
            CREATE ACCOUNT
          </button>

        </form>


        <p className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Register;