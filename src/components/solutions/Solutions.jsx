import React from "react";
import "./solution.css";
import Button from "../button/Button";

import Vendors from "../../images/vendors.jpeg";
import ProjectTeamImage from "../../images/projectTeam.jpeg";
import Owners from "../../images/Owners.jpeg";

const Card = ({ imageUrl, label, description, to }) => {
  console.log("Rendering Card:", label);
  return (
    <div className="card">
      <img src={imageUrl} className="cardsImage" alt={label} />
      <div className="cardContent">
        <p>{description}</p>
        <div className="solutionButton">
          <Button label={label} to={to} />
        </div>
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
          to="/owners"
        />
        <Card
          imageUrl={Vendors}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label="Vendors"
          // to="/vendors"
        />
        <Card
          imageUrl={ProjectTeamImage}
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="Project Team"
          // to="/project-team"
        />
      </div>
    </div>
  );
};

export default Solutions;
