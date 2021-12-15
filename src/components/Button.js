import React from "react";
import add from "./../resources/add.png";

export const Button = ({ type, handlerFunc }) => {
  const getSign = () => {
    if (type === "add") {
      return "+";
    }
    if (type === "delete") {
      return "-";
    }
    if (type === "edit") {
      return ".";
    }
  };
  const getText = () => {
    if (type === "add") {
      return "Add new.";
    }
    if (type === "delete") {
      return "Delete.";
    }
    if (type === "edit") {
      return "Edit.";
    }
  };
  return (
    <button className="Btn" onClick={handlerFunc}>
      <img
        src={add}
        alt="Add symbol image."
        style={{ backgroundColor: "#fff", borderRadius: "50%" }}
      ></img>
    </button>
  );
};
