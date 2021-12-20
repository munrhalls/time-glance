import React from "react";
import add from "./../resources/add.png";
import del from "./../resources/del.png";
import edit from "./../resources/edit.png";
import chevronDown from "./../resources/chevronDown.svg";
import chevronUp from "./../resources/chevronUp.svg";

export const Button = ({ type, handlerFunc }) => {
  let img, label;
  const setResources = () => {
    if (type === "add") {
      img = add;
      label = "New deck.";
    }
    if (type === "del") {
      img = del;
      label = "Delete.";
    }
    if (type === "edit") {
      img = edit;
      label = "Edit.";
    }
    if (type === "scrollDown") {
      img = chevronDown;
      label = "";
    }
    if (type === "scrollUp") {
      img = chevronUp;
      label = "";
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
