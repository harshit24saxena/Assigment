import { Link } from "react-router";
import "./SigninPage.css";

export default function SignIn() {
  return (
    <div className="container_signin">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="login_detail">
        <span className="email">Email</span>
        <input type="email" placeholder="Email" />
        <span className="pass">Password</span>
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
      <p className="regis_Link">
        Don't have account?{" "}
        <Link className="Link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
