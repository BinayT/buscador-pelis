import React from "react";

export const Titulo = ({ children }) => {
  //{children} ==== this.props.children
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};
