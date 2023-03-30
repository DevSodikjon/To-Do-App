import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../cards/Cards";
const Home = () => {
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const fetchData = async () => {
    try {
      const respons = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
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
        data={news.publishedAt}
        title={news.title}
        img={news.imageUrl}
        summary={news.summary}
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
      {filteredData}
    </>
  );
};

export default Home;
