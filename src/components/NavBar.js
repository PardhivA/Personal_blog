import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Reorder } from "@mui/icons-material";

export default function NavBar() {
  return (
    <nav className="NavigationBar">
      <div>
        <Link to="/" className="Links">
          Home
        </Link>
      </div>
      <div>
        <Link to="/projects" className="Links">
          Projects
        </Link>
      </div>
      <div>
        <Link to="/contact" className="Links">
          Contact
        </Link>{" "}
      </div>
    </nav>
  );
}
