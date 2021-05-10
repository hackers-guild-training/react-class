import "./App.css";
import NavBarHeader from "./components/NavBarHeader";
import "bootstrap";
import HomeCard from "./components/HomeCard";
import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";
function App() {
  let [count, setCount] = useState(0);

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
      <div className="list-container">
        <BlogList />
      </div>
    </div>
  );
}

export default App;
