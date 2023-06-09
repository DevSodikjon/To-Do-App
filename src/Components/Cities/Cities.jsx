import React, { useEffect, useState } from "react";
import "../Cities/Cities.scss";
import axios from "axios";

const Cities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    console.log(data);
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return <div className="Loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Cities and Countries</h2>

          <form>
            <input type="text" placeholder="Search ..." />
          </form>
        </div>

        <div className="card-group">
          {data.map((el) => (
            <div className="card" key={el.id}>
              <div className="card_items">
                <div className="card-img">
                  <img src={el.flags.png} alt="" />
                </div>

                <div className="card-content">
                  <h3></h3>
                  <p>
                    <span>Cauntry: </span>
                    {el.name.common}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {el.capital}
                  </p>
                  <p>
                    <span>Currency: </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cities;
