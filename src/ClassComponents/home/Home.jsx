import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../cards/Cards";
import "./Home.scss";
const Home = () => {
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const fetchData = async () => {
    try {
      const respons = await axios.get(
        " https://api.escuelajs.co/api/v1/products"
      );
      console.log(respons.data);
      setData(respons.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data
    .filter((value) => {
      if (searchTitle === "") {
        return value;
      } else if (
        value.title.toLowerCase().includes(searchTitle.toLocaleLowerCase())
      ) {
        return value;
      }
    })
    .map((news) => (
      <Cards
        key={news.id}
        id={news.id}
        creationAt={news.creationAt}
        title={news.title}
        img={news.images}
        summary={news.description}
      />
    ));

  return (
    <>
      <input
        type="text"
        className="home__text--input"
        placeholder="Search"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="card-group">{filteredData}</div>
    </>
  );
};

export default Home;
