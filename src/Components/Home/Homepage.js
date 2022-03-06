import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-intro">
        <img
          src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
          alt="hamidoo"
          className="home-intro-image"
        />
        <h1 className="home-intro-name">Hafeez Ur Rehman</h1>
        <p className="home-intro-wry">Frontend Developer</p>
        <p className="home-intro-short-note">
          Hello Guys✨ Welcome to my Profile. I am a Self Taught Frontend
          Developer My curiosity to learn and build new things helped me improve
          my skills a lot i am very grateful for the people who taught me to
          code and who helped me achieve whatever i am today!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
