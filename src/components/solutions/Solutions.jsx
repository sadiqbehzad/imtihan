import "./solution.css";
import Button from '../button/Button';

import LukeImage from '../../images/Luke.jpeg';
import OwnerImage from '../../images/owner.jpeg';
import ProjectTeamImage from '../../images/projectTeam.jpeg';


const Card = ({ imageUrl, label, description }) => {
  console.log('Rendering Card:', label);  // Log a message when the Card component renders
  return (
    <section className="card">
      <img src={imageUrl} className="card-image" alt={label} />
      <div className="content">
        <p>{description}</p>
        <Button label={label} />
      </div>
    </section>
  );
};

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

const Solutions = () => {
  return (
    <div className="Solutions">
      <Header title="Solutions for you" />
      <div className="card-container">
        <Card
          imageUrl={OwnerImage}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label= "Owners"
        />
        <Card
          imageUrl={LukeImage}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label= "Vendors"
        />
        <Card
          imageUrl={ProjectTeamImage}
          description= "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="Project Team"
        />
      </div>
    </div>
  );
};

export default Solutions;
