import BlogOne from "./BlogOne";
import BlogsHero from "./BlogsHero";
// import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
const Blogs = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "#0A253B";
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    <div>
      <Navbar background="#0A253B" />
      <BlogsHero />
      <BlogOne />
    </div>
  );
};

export default Blogs;
