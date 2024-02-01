


import React from "react";
import "./solution.css";
import Button from "../button/Button";

import Vendors from "../../images/vendors.jpeg";
import ProjectTeamImage from "../../images/projectTeam.jpeg";
import Owners from "../../images/Owners.jpeg";

const Card = ({ imageUrl, label, description, url }) => {
  console.log('Rendering Card:', label); // Log a message when the Card component renders
  return (
    <div className="card">
      <img src={imageUrl} className="cardsImage" alt={label} />
      <div className="cardContent">
        <p>{description}</p>
        <a href={url} className="link-button">
          <Button>{label}</Button>
        </a>
      </div>
    </div>
  );
};

const Header = ({ title }) => {
  return (
    <header className="SolutionsHeader">
      <h1>{title}</h1>
    </header>
  );
};

const Solutions = () => {
  return (
    <div className="SolutionsPage">
      <Header title="Solutions for you" />
      <div className="solutionsContainer">
        <Card
          imageUrl={Owners}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label="Owners"
          url="https://example.com/owners"
        />
        <Card
          imageUrl={Vendors}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label="Vendors"
          url="https://example.com/vendors"
        />
        <Card
          imageUrl={ProjectTeamImage}
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="Project Team"
          url="https://example.com/project-team"
        />
      </div>
    </div>
  );
};

export default Solutions;

