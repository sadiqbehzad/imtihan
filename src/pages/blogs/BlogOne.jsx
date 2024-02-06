import "./blogone.css";
import blogone from "../../images/blogs/blogone.jpg";
import Button from "../../components/button/Button";
const BlogOne = () => {
  return (
    <div className="blogOne-container">
      <div className="blogOne">
        <div className="blogOne-text">
          <div className="blogOne-title">
            <h2>Long Established</h2>
          </div>
          <div className="blogOne-description">
            <p>
              July 4, 2023 <br />
              <br />
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className="blogOne-button">
              <Button label={"Learn More"} color="black" />
            </div>
          </div>
        </div>
        <div className="blogOne-pic">
          <img src={blogone} alt="blog-one" />
        </div>
      </div>
    </div>
  );
};

export default BlogOne;
