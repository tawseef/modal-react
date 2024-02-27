import React, { useState } from "react";
import Display from "./displayForm";
import "./modal.css";

export default function Modal() {
  const [formClass, setFormClass] = useState("true");

  return (
    <div className="cover">
      <h1> User Details Modal</h1>
      <button
        className="butn"
        onClick={() => {
          setFormClass("false");
          console.log("Clicked");
        }}
      >
        {" "}
        Open Form{" "}
      </button>
      {formClass === "false" ? (
        <Display classForm={formClass} setClassForm={setFormClass} />
      ) : (
        false
      )}
    </div>
  );
}
