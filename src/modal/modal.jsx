import React, { useState } from "react";
import Display from "./displayForm";
import "./modal.css";

export default function Modal() {
  const [formClass, setFormClass] = useState("true");

  return (
    <div className="abc">
      <h1> User Details Modal</h1>
      <button
        className="butn"
        onClick={() => {
          setFormClass("false");
        }}
      >
        Open Form
      </button>
      
      {formClass === "false" ? (
        <div className="modal"><Display classForm={formClass} setClassForm={setFormClass}/></div>
      ) : (
        false
      )}
    </div>
  );
}
