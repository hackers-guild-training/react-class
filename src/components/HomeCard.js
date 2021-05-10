import React from "react";

function HomeCard(props) {
  return (
    <div
      style={{
        padding: 10,
        background: "white",
        borderRadius: 10,
        width: 250,
        margin: 5,
      }}
    >
      <img src={props.source} style={{ height: 100, width: 150 }} />
      <h5 style={{ color: "brown", textTransform: "uppercase" }}>
        {props.title}
      </h5>
      <p style={{ color: "brown" }}>{`SHOP >`}</p>
    </div>
  );
}

export default HomeCard;
