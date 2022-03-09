import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./MainPage.css";

const Blogs = ({ currentTabValue }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(0);

  const selectedBlog = useRef();

  useEffect(() => {
    if (currentTabValue === "Blogs") {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    } else {
      setIsLoaded(false);
    }
  }, [currentTabValue]);

  const handleSelectBlog = (e) => {
    // const checkBlogId = e.target.id === "" ? "1" : e.target.id;
    // setSelectedBlogId(Number(checkBlogId) - 1);
    setIsReadMore(!isReadMore);
    console.log(e);
  };

  const allBlogs = [
    {
      created_at: Date.now(),
      id: "1",
      name: "How to become a self taught developer",
      description: "dfdkfjkdfjkdfkldjfkdfkdfdfdfdfdfkdfkdf",
      text: "loremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdfdfdd kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfdsloremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdfdfdd kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds",
      image: "https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg",
    },
    {
      created_at: Date.now(),
      id: "2",
      name: "How to become a react developer",
      description:
        "loremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfd",
      text: "loremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfd um kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdloremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdfdfdd kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds",
      image:
        "https://i.all3dp.com/wp-content/uploads/2021/08/19122718/lets-take-our-drawings-from-2d-to-3d-circle-line-art-school-via-youtube-210228.jpg",
    },
    {
      created_at: Date.now(),
      id: "3",
      name: "How to become a typesctipt developer",
      description:
        "loremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfd",
      text: "loremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdloremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdloremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdloremipsum kdjkjdfd  dflkdfk kdfdklfjdkfdkfdfjdfdfdfddkfdsfdfdfdd kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds kdfdklfjdkfdkfdfjdfdfdfddkfds",
      image:
        "https://htdraw.com/wp-content/uploads/2020/11/How-to-Draw-3D-Stairs-step-by-step-3D-drawing-easy-for-Beginners.jpg",
    },
  ];

  const checkBlogs = isReadMore ? allBlogs[selectedBlogId] : allBlogs;

  // console.log(checkBlogs);

  return (
    <div
      className={`main-container  ${
        currentTabValue === "Blogs" ? "open-main-item" : "collapse-main-item"
      }`}
    >
      <h1 className="title">{currentTabValue}</h1>
      {isLoaded ? (
        <div
          className={`projects-container ${
            isReadMore ? "center-blog" : "null"
          }`}
        >
          {Array.isArray(checkBlogs) ? (
            checkBlogs.map((blog) => (
              <Card
                className="blog-card-container"
                key={blog.id}
                footer={
                  <span>
                    <Button
                      label="Read More..."
                      icon="pi pi-check"
                      style={{ marginRight: ".25em" }}
                      onClick={handleSelectBlog}
                      id={blog.id}
                      title={blog.id}
                      ref={selectedBlog}
                    />
                  </span>
                }
                header={
                  <img
                    alt={blog.name}
                    src={blog.image}
                    className="blog-image"
                  />
                }
              >
                {blog.name}
                <p>{blog.description}</p>
              </Card>
            ))
          ) : (
            <div className="blog-selected-container">
              <h1 className="title">{checkBlogs.name}</h1>
              <Card
                footer={
                  <span>
                    <Button
                      className="p-button-success"
                      label="Done"
                      icon="pi pi-check"
                      style={{ marginRight: ".25em" }}
                      onClick={() => setIsReadMore(false)}
                    />
                  </span>
                }
                header={<img alt={checkBlogs.name} src={checkBlogs.image} />}
                className="blog-card"
              >
                {checkBlogs.name}
                <h3>{checkBlogs.description}</h3>
                <p>{checkBlogs.text}</p>
              </Card>
            </div>
          )}
        </div>
      ) : (
        <div className="projects-container">
          <Skeleton width="100%" height="32em" />
          <Skeleton width="100%" height="32em" />
        </div>
      )}
      l
    </div>
  );
};

export default Blogs;
