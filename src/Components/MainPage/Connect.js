import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";
import { saveAs } from "file-saver";
import Resume from "../../Images/resume.png";
import "./MainPage.css";

const Connect = ({ currentTabValue }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const saveFile = () => {
    saveAs(
      "https://res.cloudinary.com/cloudihafeez/image/upload/v1646662470/resume/resume_flivn5.png",
      "hafeez-resume.png"
    );
  };

  useEffect(() => {
    if (currentTabValue === "Connect") {
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
        currentTabValue === "Connect" ? "open-main-item" : "collapse-main-item"
      }`}
    >
      <div className="main-container">
        <h1 className="title">{currentTabValue}</h1>
        <div className="connect-container">
          <Button
            icon="pi pi-github "
            className="p-button-raised p-button-rounded p-button-primary"
          ></Button>
          <Button
            icon="pi pi-twitter "
            className="p-button-raised p-button-rounded p-button-primary"
          ></Button>
          <Button
            icon="pi pi-linkedin "
            className="p-button-raised p-button-rounded p-button-primary"
          ></Button>
        </div>
        <h3 className="title">Resume</h3>
        {isLoaded ? (
          <div className="resume-container">
            <img className="resume-image" src={Resume} alt="resume" />
          </div>
        ) : (
          <Skeleton width="60%" height="40em" className="center-skeleton" />
        )}
        <Button className="resume-btn" onClick={saveFile}>
          Download My Resume
        </Button>
      </div>
    </div>
  );
};

export default Connect;
