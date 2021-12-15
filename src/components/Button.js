import React from "react";
import add from "./../resources/add.png";
import xbtn from "./../resources/x-button.png";

export const Button = ({ type, handlerFunc }) => {
  let img, label;
  const setResources = () => {
    if (type === "add") {
      img = add;
      label = "Add new deck.";
    }
    if (type === "del") {
      img = xbtn;
      label = "Delete.";
    }
  };
  setResources();
  return (
    <button className={`Btn ${type}`} onClick={handlerFunc}>
      <img
        src={img}
        alt="Add symbol image."
        style={{ backgroundColor: "#fff", borderRadius: "50%" }}
      ></img>
      <label>{label}</label>
    </button>
  );
};
