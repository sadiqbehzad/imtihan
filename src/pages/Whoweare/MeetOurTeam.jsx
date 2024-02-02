import "./meetourteam.css";
import firstPerson from "../../images/WhoWeAre/person-a.jpg";
import secondPerson from "../../images/WhoWeAre/person-b.jpg";
import thirdPerson from "../../images/WhoWeAre/person-c.jpg";

const MeetOurTeam = () => {
  return (
    <div className="meetourteam">
      <div className="team-main-container">
        <div className="title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="team-details">
          <div className="person-a">
            <div className="team-gradient-div">
              <div className="person-a-pic-name">
                <img src={firstPerson} alt="person-a"></img>
                <div className="person-a-name">
                  <p>Christina Carole</p>
                </div>
              </div>
            </div>
            <p className="person-a-description">
              Placeholder for short description about this person. Placeholder
              for short description about this person.
            </p>
          </div>
          <div className="person-b">
            <div className="team-gradient-div">
              <div className="person-b-pic-name">
                <img src={secondPerson} alt="person-b"></img>
                <div className="person-b-name">
                  <p>Carlos Juan</p>
                </div>
              </div>
            </div>
            <p className="person-b-description">
              Placeholder for short description about this person. Placeholder
              for short description about this person.
            </p>
          </div>
          <div className="person-c">
            <div className="team-gradient-div">
              <div className="person-c-pic-name">
                <img src={thirdPerson} alt="person-c"></img>
                <div className="person-c-name">
                  <p>John Alex</p>
                </div>
              </div>
            </div>
            <p className="person-c-description">
              Placeholder for short description about this person. Placeholder
              for short description about this person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
