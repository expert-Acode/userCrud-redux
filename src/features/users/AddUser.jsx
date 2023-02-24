import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adduser } from "./userSlice";

export function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        adduser({
          name,
          email,
        })
      );
      setError(null);
      navigate("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>

      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <span style={{ color: "red" }}> {error && error}</span>
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
          <Link to="/"> <button className="button-primary">Load users</button></Link>
        </div>
      </div>
    </div>
  );
}
