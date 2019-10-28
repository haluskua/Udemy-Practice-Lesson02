import React from "react";

const char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    borderRadius: '5px',
    border: "1.5px solid green",
    texAlign: "center",
    fontSize: '1.4rem',
    backgroundColor: 'yellowgreen'
  };
  return <div style={style} onClick={props.clicked}>
      {props.character}</div>;
};

export default char;
