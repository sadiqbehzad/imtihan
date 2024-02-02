import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import InnovSustain from "./InnovSustain";
import MeetOurTeam from "./MeetOurTeam";
import MissionVision from "./MissionVision";
const WhoWeAre = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <MissionVision />
      <InnovSustain />
      <MeetOurTeam />
    </div>
  );
};

export default WhoWeAre;
