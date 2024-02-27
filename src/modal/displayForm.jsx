import React, { useState } from "react";
import "./form.css";

export default function DisplayForm({ classForm, setClassForm }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [cssValue, setCssValue] = useState(classForm);

  const handleSubmit = () => {
    if (phone.length !== 10) {
      alert("Invalid Phone Number");
    }

    if (phone.length === 10) {
      setCssValue("true");
      setClassForm("true");
    }
  };

  return (
    <div className={cssValue}>
      <div className="modalBack">
        <div className="wrapper">
          <h1>Fill Details</h1>
          <form
            className="form"
            onSubmit={(e) => {
              if (phone.length !== 10) {
                alert(
                  "Invalid phone number. Please enter a 10-digit phone number."
                );
                e.preventDefault();
              } else handleSubmit();
            }}
          >
            <label htmlFor="username">
              <strong>Username:</strong>
            </label>
            <input
              required
              className="inpBox"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label htmlFor="email">
              <strong>Email Address:</strong>
            </label>
            <input
              className="inpBox"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="phone">
              <strong>Phone:</strong>
            </label>
            <input
              className="inpBox"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />
            <label htmlFor="dob">
              <strong>Date of Birth:</strong>
            </label>
            <input
              className="inpBox"
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              required
            />
            <br />
            <div>
              <button
                type="Submit"
                className="btn"
                // onSubmit={() => {
                //   if (phone.length === 10) {
                //     handleSubmit();
                //   } else alert("Invalid Phone Number");
                // }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
