import React from "react";
import projectData from "../data/projectData";
import project1 from "../assets/project1.png";

function Projects() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">My Projects</h1>

      <div className="row">
        {projectData.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow h-100">

              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark me-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;