import React from "react";

function MyList(props) {
  
  return (
    <div>
      <h1>hello, {props.item.name}</h1>
      <h1>number is , {props.item.num}</h1>
      <button>click Me</button>
    </div>
  );
}

export default MyList;
