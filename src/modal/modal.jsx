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
          setFormClass("modal");
        }}
      >
        Open Form
      </button>
      
      {formClass === "modal" ? (
        <Display classForm={formClass} setClassForm={setFormClass}/>
      ) : (
        false
      )}
    </div>
  );
}
