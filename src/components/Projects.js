import React from "react";
import "./Projects.css"
import {ProjectsList} from "./ProjectsList";
import Project from "./Project";
export default function Projects(){
       const project_array = ProjectsList.map((obj) => {
          return(  <Project name = {obj.name} site_url = {obj.site_url} img_url = {obj.img_url} alternate = {obj.alternate} /> 
        )})


        return(
            <div className="Projects">
                {project_array}
            </div>
        );
}