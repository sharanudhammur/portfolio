import React from "react";
import "./TitleComponent.scss";

function TitleComponent({ children }) {
  return <div className="title-component">{children}</div>;
}

export default TitleComponent;
