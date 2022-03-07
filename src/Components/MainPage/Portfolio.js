import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import FileExplorer from "../../Images/file-explorer.png";
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

  const header = <img alt="Card" src={FileExplorer} />;
  const footer = (
    <span>
      <Button
        label="View Code"
        icon="pi pi-github"
        style={{ marginRight: ".25em" }}
      />
      <Button
        label="Live Demo"
        icon="pi pi-check"
        className="p-button-secondary"
      />
    </span>
  );

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
          <Card footer={footer} header={header}>
            Mini-File-Explorer
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, odio magni corporis maxime quam voluptatem nam iusto
              vero quo, perferendis earum alias, incidunt voluptate eligendi
              suscipit eos soluta repudiandae amet?
            </p>
          </Card>
          <Card footer={footer} header={header}>
            Content
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, odio magni corporis maxime quam voluptatem nam iusto
              vero quo, perferendis earum alias, incidunt voluptate eligendi
              suscipit eos soluta repudiandae amet?
            </p>
          </Card>
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
