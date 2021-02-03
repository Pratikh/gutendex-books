import React from "react";
import "./Home.css";
import configData from "../config.json";
import svgIcons from "../assets/icons/index";
import "bootstrap/dist/css/bootstrap.css";

function ListedItem({ items, onSelect }) {
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      {items.map((item) => (
        <div
          className="categoryList"
          key={`/books/${item}`}
          onClick={() => onSelect(item)}
        >
          <div
            className="categoryIcon"
            style={{ backgroundImage: `url(${svgIcons[item]})` }}
          ></div>
          <h5>{item.toLocaleUpperCase()}</h5>
          <div
            className="next"
            style={{ backgroundImage: `url(${svgIcons["Next"]})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

const HomePage = ({setGenre }) => {
  return (
    <div>
      <h4 className="title">{configData.page_tittle}</h4>
      <h2 className="subTitle">{configData.sub_title}</h2>
      <ListedItem items={configData.category} onSelect={setGenre} />
    </div>
  );
};

export default HomePage;
