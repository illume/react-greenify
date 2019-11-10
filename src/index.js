import React from "react";

const ReactGreenify = props => {
  const { children, color } = props;
  return (
    <div
      style={{
        backgroundColor: color || "green"
      }}
    >
      {children}
    </div>
  );
};

export default ReactGreenify;
