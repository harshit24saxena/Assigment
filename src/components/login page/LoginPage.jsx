import { Link, useNavigate } from "react-router";
import "./LoginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  function saveInfo() {
    const PD = {
      Name: document.getElementById("1").value,
      Number: document.getElementById("2").value,
      Email: document.getElementById("3").value,
      Password: document.getElementById("4").value,
      CompanyName: document.getElementById("5").value,
    };
    localStorage.setItem("PD_Name", JSON.stringify(PD));
    if (
      !PD.Name ||
      !PD.Number ||
      !PD.Email ||
      !PD.Password ||
      !PD.CompanyName
    ) {
      console.log("field is missing");
    } else {
      navigate("/profile");
    }
  }

  return (
    <div className="container_login">
      <h1>Create your PopX account</h1>
      <span>Full Name *</span>
      <input placeholder="Marry Doe" type="text" id="1" />
      <span>Phone Number *</span>
      <input placeholder="98436 78724" type="number" id="2" />
      <span>Email Address *</span>
      <input placeholder="Marry@gmail.com" type="email" id="3" />
      <span>Password *</span>
      <input placeholder="password" type="password" id="4" />
      <span>Company Name *</span>
      <input placeholder="Marry Co." type="text" id="5" />
      <div className="checkBox_div">
        <p>are you an agency</p>
        <label class="custom-checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <span>Yes</span>
        <label class="custom-checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <span>No</span>
      </div>
      <button onClick={saveInfo} className="CreateAccount_button">
        Create Account
      </button>
    </div>
  );
};
