import "./App.css";
import NavBarHeader from "./components/NavBarHeader";
import "bootstrap";
import HomeCard from "./components/HomeCard";
import { useEffect, useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  const [blogPosts, setPost] = useState([]);

  let number = 0;
  const incrementNumber = () => {
    number += 1;
  };
  const handleClick = (e) => {
    const increment = count + 1;
    incrementNumber();
    setCount(increment);
    console.log(number);
  };

  const renderPosts = () => {
    // console.log(blogPosts);
    // update this function to render all the 100 elements from the server
    if (blogPosts.length > 0) {
      console.log(blogPosts[0]);
      const { title, body } = blogPosts[0];
      return (
        <li
          style={{
            border: "1px solid black",
            width: 500,
            borderRadius: 5,
            textAlign: "left",
            padding: 15,
          }}
        >
          <p style={{ textTransform: "uppercase" }}>
            <strong>{title}</strong>
          </p>
          <p>{body}</p>
        </li>
      );
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
        setPost(json);
        console.log(json);
      })
      .catch((err) => {
        console.log("CAUGHT: ", err);
      });

    // next line

    // .then((response) => response.json())
    //   .then((json) => setPost(json));
  }, []);

  return (
    <div className="App">
      <NavBarHeader userName={"joe doe"} />
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <HomeCard
            source={
              "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            }
            title="Headphones"
          />
          <HomeCard
            source={
              "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            title="Speakers"
          />
          <HomeCard
            source={
              "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            title="earphones"
          />
        </div>
        <h1>count:{count}</h1>
        <h1>number:{number}</h1>
        <h1>To Be Covered</h1>
        <button className="btn btn-primary" onClick={handleClick}>
          update state
        </button>
        <ul>
          <li>States</li>
          <li>Props</li>
          <li>Rendering</li>
          <li>side effects - network calls</li>
          <li>Js promises</li>
          <li>hooks</li>
          <li>Events</li>
          <li>state management</li>
          <li>convert HTML react- forms Events</li>
        </ul>
      </header>
      <h2>BlogPosts</h2>
      <ul style={{ listStyle: "none" }}>{renderPosts()}</ul>
    </div>
  );
}

export default App;
