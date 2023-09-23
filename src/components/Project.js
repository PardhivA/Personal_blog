import React from "react";
import "./Projects.css";
export default function Project(props) {
  return (
    <a href={props.site_url} target="_blank" style={{ textDecoration: "none" }}>
      <div className="Project">
        <img src={props.img_url} alt={props.alternate}></img>
        <p style={{ color: "white", fontSize: "200%", paddingRight: "50px" }}>
          {props.name}
        </p>
      </div>
    </a>
  );
}
