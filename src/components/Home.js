import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="Home">
      <img
        src={require("./ProfilePic.jpg")}
        width={350}
        height={350}
        className="ProfilePic"
      ></img>
      <h1 className="About">
        Hi! My name is <span className="Name">Pardhiv</span>
      </h1>
      <h2
        className="About"
        style={{
          borderLeft: "5px",
          borderLeftWidth: "15px",
          borderColor: "magenta",
          borderStyle: "solid",
          paddingLeft: "5px",
        }}
      >
        I am a third year under grad pursuing Btech in Computer Science and
        Engineering at{" "}
        <a className="IITT" href="https://www.iittp.ac.in/" target="_blank">
          IIT Tirupati
        </a>
        . I was born in Kakinada, AP and raised in Hyderabad, Telangana. A
        coding enthusiast, keen in learning, building and using new technologies
        that benifit the society. I am a proficient App and Web Developer (find
        projects in <Link to="/projects">Projects</Link> page), started
        exploring the fun and flabbergasting world of AI & ML.
      </h2>
    </main>
  );
}
