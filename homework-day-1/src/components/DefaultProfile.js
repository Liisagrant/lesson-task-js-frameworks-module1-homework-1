import React from "react";
import example from "./image/example.png";

export default function DefaultProfile({ altText }) {
  return <img src={example} alt={altText}></img>;
}
