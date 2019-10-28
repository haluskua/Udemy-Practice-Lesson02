import React from "react";

const validation = props => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <=5) {
        validationMessage = 'Text too short';
    }
  return (
    // {/* <div> */}
    //     {/* //using a turnary expression */}
    //   {/* {props.inputLength > 5 ? <p>Text long enough</p> : <p>Text too short!</p>} */}
    // {/* </div> */}
    <div>
        <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
