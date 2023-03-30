import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Cards = (props) => {
  const { data, img, title, summary, id } = props;
  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card__images" />

        <div className="card__text">
          <p className="card__text--data">{data}</p>
          <h3 className="card__text--h3">{title}</h3>
          <p className="card__text--p">{summary}</p>
          <Link to={`news/${id}`} className="card__text--btn">
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
