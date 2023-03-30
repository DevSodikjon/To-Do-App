import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./SingleArticle.scss";

const SingleArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const respons = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      console.log(respons.data);
      setData(respons.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="article">
        <div className="article__header">
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <div className="article__container">
          <div className="article_section">
            <h3 className="article__section--h3">ddd{data.title}</h3>
            <p className="article__section--p">{data.summary}</p>
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
