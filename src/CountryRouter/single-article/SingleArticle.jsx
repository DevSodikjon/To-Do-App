import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./SingleArticle.scss";

const SingleArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const api = `https://restcountries.com/v3.1/alpha/${id}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}`);
      setData(response.data);
    } catch (error) {}
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  let name;
  let flag;
  let capital;

  data.forEach((el) => {
    console.log(el.name.common);
    if (el.ccn3 === id) {
      name = el.name.common;
      flag = el.flags.svg;
      capital = el.capital;
    }
  });

  return (
    <>
      <div className="article">
        <div className="article__header">
          <img src={flag} alt={name} />
        </div>
        <div className="article__container">
          <div className="article_section">
            <h3 className="article__section--h3">{name}</h3>
            <p className="article__section--p">{capital}</p>
          </div>
          <Link to="/" className="article__btn">
            <span>Back to homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
