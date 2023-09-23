import React from "react";
import "./Contact.css";
function ContactItem(props) {
  return (
    <a href={props.link} target="_blank">
      <div className="ContactDiv">
        <img
          src={props.photo_link}
          width={200}
          height={150}
          style={{ borderRadius: "4px" }}
        ></img>
        <p> {props.name}</p>
      </div>
    </a>
  );
}

export default ContactItem;
