import "./blogone.css";
import blogone from "../../images/blogs/blogone.jpg";
const BlogOne = () => {
  return (
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
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
        </div>
      </div>
      <div className="blogOne-pic">
        <img src={blogone} alt="blogone" />
      </div>
    </div>
  );
};

export default BlogOne;
