import React, { useEffect, useState } from "react";
import "./navStyles.css";

//React hooks

function NavBarHeader(props) {
  const [selected, setSelected] = useState(""); //useState hook returns array of two items
  const [target, setTarget] = useState();

  useEffect(() => {
    console.log("target", target);
  }, [target]);

  const handleSelect = (idx) => {
    setTarget(idx);
    // console.log(e.target);
    // if (selected === "selected") {
    //   setSelected("");
    // } else {
    //   setSelected("selected");
    // }
  };

  const renderNavItems = () => {
    const navItems = ["Learn", "Measure", "Blog", "About"];
    const navElements = navItems.map((navItem, idx) => {
      const hasItbeenClicked = target === idx;
      return (
        <li
          key={idx}
          className={`nav-item}`}
          id="learn"
          onClick={() => {
            handleSelect(idx);
          }}
        >
          <a
            href={`#${navItem}`}
            className={hasItbeenClicked ? "selected" : ""}
          >
            {navItem}
          </a>
        </li>
      );
    });

    return navElements;
  };

  return (
    <div className="h-main">
      <div>LOGO</div>
      <ul className="nav-links">
        {renderNavItems()}
        <li style={{ alignSelf: "flex-end", textTransform: "capitalize" }}>
          {props.userName}
        </li>
      </ul>
    </div>
  );
}

export default NavBarHeader;
