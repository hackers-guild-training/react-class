import React, { useEffect, useState } from "react";

function BlogList() {
  const [blogPosts, setPost] = useState([]);
  const [color, setColor] = useState("black");
  const renderPosts = () => {
    // console.log(blogPosts);
    // update this function to render all the 100 elements from the server
    if (blogPosts.length > 0) {
      const sliced = blogPosts.slice(94);
      return sliced.map((post, idx) => {
        return (
          <li
            onClick={() => {
              if (color === "red") {
                setColor("black");
              } else {
                setColor("red");
              }
            }}
            key={post.id}
            style={{
              border: `1px solid ${color}`,
              width: 500,
              borderRadius: 5,
              textAlign: "left",
              padding: 15,
              margin: 10,
            }}
          >
            <p style={{ textTransform: "uppercase" }}>
              <strong>{post.title}</strong>
            </p>
            <p>{post.body}</p>
          </li>
        );
      });
    }
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status !== 200) {
          throw `Something went wrong, status:  ${response.status}`;
        }
        return response.json();
      })
      .then((json) => {
        // Display 10 posts
        //limit the number of posts to 10 before setting state
        setPost(json);
      })
      .catch((err) => {
        console.log("CAUGHT: ", err);
      });
  }, []);
  return (
    <div>
      <ul className="list-container" style={{ listStyle: "none" }}>
        {renderPosts()}
      </ul>
    </div>
  );
}

export default BlogList;
