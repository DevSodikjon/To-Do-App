import React, { useEffect, useState } from "react";
import "../Cities/Cities.scss";
import axios from "axios";

const Cities = () => {
  // const [, setData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // const FetchData = async () => {
  //   try {
  //     const res = await axios.get("https://restcountries.com/v3.1/all");
  //     console.log(res);
  //     setData(res.data);
  //   } catch (error) {
  //     setError(error);
  //   }

  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((json) => {
  //     setData(json);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  console.log(data);
  useEffect(() => {
    // FetchData();
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // };
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
