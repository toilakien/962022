import React from "react";

const Loader = ({ text}:{text:any}) => (
  <div style={{ background: "hsl(65, 65, 60)" }}>Loading {text}...</div>
);

export default Loader;
