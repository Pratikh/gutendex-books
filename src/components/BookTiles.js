import React from "react";
import "./BookTiles.css";

const Tile = ({ img, title, author }) => {
  return (
    <div>
      <img src={img} alt={title + " image"} className="bookImage" />
      <div className="details">
        <h2 className="bookData">{title}</h2>
        <p className="bookData">{author}</p>
      </div>
    </div>
  );
};

export default function BookTiles({ tileData, onClickGridItem }) {
  return (
    <div className="bookMainGridWrapper">
      {tileData.map((tile) => (
        <div
          key={tile.title + tile.author + tile.id}
          onClick={() => onClickGridItem(tile)}
          className="detailsContainer"
        >
          <Tile img={tile.img} title={tile.title} author={tile.author}></Tile>
        </div>
      ))}
    </div>
  );
}
