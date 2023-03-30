import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Cards = (props) => {
  const { capital, flags, cauntry, population, id } = props;
  return (
    <>
      <div className="card" key={id}>
        <img src={flags} alt={cauntry} className="card__images" />

        <div className="card__text">
          <p className="card__text--data">{capital}</p>
          <h3 className="card__text--h3">{cauntry}</h3>
          <p className="card__text--p">{population}</p>
          <Link to={`/news/${id}`} className="card__text--btn">
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
