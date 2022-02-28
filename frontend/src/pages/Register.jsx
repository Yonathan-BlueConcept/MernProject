import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function Register() {
  const onChange = () => {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placehodler="Enter your name"
              onChange={onChange}
              placeholder="Name"
            />

            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placehodler="Enter your Email"
              onChange={onChange}
              placeholder="Email"
            />

            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placehodler="Enter your password"
              onChange={onChange}
              placeholder="Password"
            />
            <input
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placehodler="Confirm your password"
              onChange={onChange}
              placeholder="Confirm pasword"
            />
          </div>
        </form>
      </section>
    </>
  );
}
