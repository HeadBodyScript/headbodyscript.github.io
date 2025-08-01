import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input type="text" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;