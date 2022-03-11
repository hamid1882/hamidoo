import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import allProjects from "./Projects";
import "./MainPage.css";

const Portflio = ({ currentTabValue }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (currentTabValue === "Portfolio") {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    } else {
      setIsLoaded(false);
    }
  }, [currentTabValue]);

  return (
    <div
      className={`main-container  ${
        currentTabValue === "Portfolio"
          ? "open-main-item"
          : "collapse-main-item"
      }`}
    >
      <h1 className="title">{currentTabValue}</h1>
      {isLoaded ? (
        <div className="projects-container">
          {allProjects.map((project, idx) => (
            <Card
              key={idx}
              footer={
                <div className="project-btn">
                  <a
                    alt={project.name}
                    className="link-styles"
                    href={project.github_link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      icon="pi pi-github"
                      style={{ marginRight: ".25em" }}
                      label="Github"
                    ></Button>
                  </a>
                  <a
                    alt={project.name}
                    className="link-styles"
                    href={project.live_demo}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button
                      className="p-button-secondary"
                      icon="pi pi-check"
                      label="Live Demo"
                    ></Button>
                  </a>
                </div>
              }
              header={
                <img
                  alt="Card"
                  src={project.image}
                  className="projects-image"
                />
              }
            >
              {project.name}
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      ) : (
        <div className="projects-container">
          <Skeleton width="100%" height="32em" />
          <Skeleton width="100%" height="32em" />
        </div>
      )}
    </div>
  );
};

export default Portflio;
