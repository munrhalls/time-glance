import React from "react";
import add from "./../resources/add.png";
import del from "./../resources/del.png";
import edit from "./../resources/edit.png";
import chevronDown from "./../resources/chevronDown.svg";
import chevronUp from "./../resources/chevronUp.svg";

export const Button = ({ type, label, handlerFunc }) => {
  let img;
  const setResources = () => {
    if (type === "add") {
      img = add;
    }
    if (type === "del") {
      img = del;
    }
    if (type === "edit") {
      img = edit;
    }
    if (type === "scrollDown") {
      img = chevronDown;
    }
    if (type === "scrollUp") {
      img = chevronUp;
    }
  };
  setResources();
  return (
    <button className={`Btn ${type}`} onClick={handlerFunc}>
      <img className="BtnImg" src={img} alt="Add symbol image."></img>
      {label ? <label>{label}</label> : ""}
    </button>
  );
};
