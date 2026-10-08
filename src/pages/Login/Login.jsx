import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (event) => {

    event.preventDefault();

    alert("Login successful!");

    navigate("/profile");
  };

  return (
    <section className="auth-section">

      <div className="auth-card">

        <div className="auth-heading">

          <p>
            Welcome Back
          </p>

          <h1>
            Login
          </h1>

          <span>
            Login to continue shopping with Vasthreya.
          </span>

        </div>

        <form onSubmit={handleLogin}>

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />


          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot Password?
            </a>

          </div>


          <button
            type="submit"
            className="vasthreya-btn full-btn"
          >
            LOGIN
          </button>

        </form>


        <p className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;