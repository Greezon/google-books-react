import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Display(props) {
  return (
    <div>
      <h6>{props.title}</h6>
      <p>{props.discription}</p>
      <h3>{props.author}</h3>
      <li>{props.rating}</li>
      <button onClick={()=> props.saveBook({
		  title: props.title,
		  description: props.description,
		  author: props.author,
		  rating: props.author
	  })}>Save Book</button>
    </div>
  );
}

export default Display;
