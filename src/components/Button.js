import React from "react";
import add from "./../resources/add.png";
import del from "./../resources/del.png";
import edit from "./../resources/edit.png";
import chevronDown from "./../resources/chevronDown.svg";
import chevronUp from "./../resources/chevronUp.svg";
import exit from "./../resources/exit.svg";
import chevronLeft from "./../resources/chevronLeft.svg";
import chevronRight from "./../resources/chevronRight.svg";

export const Button = ({ type, label, handlerFunc, disabled }) => {
  let img;
  const setResources = () => {
    if (type === "add") {
      img = add;
    }
    if (type === "addSquare") {
      img = add;
    }
    if (type === "delSquare") {
      img = del;
    }
    if (type === "editSquare") {
      img = edit;
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
    if (type === "scrollLeft") {
      img = chevronLeft;
    }
    if (type === "scrollRight") {
      img = chevronRight;
    }
    if (type === "exit") {
      img = exit;
    }
    if (type === "num") {
    }
  };
  setResources();
  return (
    <button className={`Btn ${type}`} onClick={handlerFunc} disabled={disabled}>
      {img ? (
        <img className="BtnImg" src={img} alt={"Image not displayed."}></img>
      ) : (
        ""
      )}
      {label ? <label>{label}</label> : ""}
    </button>
  );
};
