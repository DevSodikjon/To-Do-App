import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../cards/Cards";
import "./Home.scss";
import { API } from "../../CountryRouter/Api";
const Home = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  const fetchData = async () => {
    try {
      const respons = await axios.get(`${API}/all`);
      setData(respons.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  const filteredData = data
    .filter((value) => {
      if (searchName === "") {
        return value;
      } else if (
        value.name.common.toLowerCase().includes(searchName.toLowerCase())
      ) {
        return value;
      }
    })
    .map((news) => (
      <Cards
        key={news.ccn3}
        id={news.ccn3}
        flags={news.flags.svg}
        capital={news.capital}
        cauntry={news.name.common}
        population={news.population}
      />
    ));

  return (
    <>
      <h2>Coutries</h2>
      <form>
        <input
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchName(e.target.value)}
        />
      </form>
      <div className="card-group">{filteredData}</div>
    </>
  );
};

export default Home;
