import BlogOne from "./BlogOne";
import BlogsHero from "./BlogsHero";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0A253B";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div>
      <BlogsHero />
      <BlogOne />
    </div>
  );
};

export default Blogs;
