import React from "react";
import { useEffect, useState } from "react";
const api = "https://wizard-world-api.herokuapp.com/Houses";

const Project = () => {
  const [houses, setHouses] = useState([]);

  function getData() {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setHouses(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="cardGroup">
        <h1>hello</h1>
        {houses.map((house, id) => (
          <div className="card" key={id}>
            <p>Name: {house.name}</p>
            <p>Animal: {house.animal}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
