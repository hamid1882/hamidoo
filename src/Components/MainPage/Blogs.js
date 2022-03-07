import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./MainPage.css";

const Blogs = ({ currentTabValue }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (currentTabValue === "Blogs") {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    } else {
      setIsLoaded(false);
    }
  }, [currentTabValue]);

  const header = (
    <img
      alt="Card"
      src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
    />
  );
  const footer = (
    <span>
      <Button
        label="Read More..."
        icon="pi pi-check"
        style={{ marginRight: ".25em" }}
      />
    </span>
  );

  return (
    <div
      className={`main-container  ${
        currentTabValue === "Blogs" ? "open-main-item" : "collapse-main-item"
      }`}
    >
      <h1 className="title">{currentTabValue}</h1>

      {isLoaded ? (
        <div className="projects-container">
          <Card footer={footer} header={header}>
            How to start your career with code.
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

export default Blogs;
