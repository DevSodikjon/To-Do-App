import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.scss";
const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("posts");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/${text}`
      );
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
  }, [text]);

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

          <div className="btns">
            <button onClick={() => setText("posts")}>Posts</button>
            <button onClick={() => setText("users")}>Users</button>
            <button onClick={() => setText("comments")}>Comments</button>
          </div>
        </div>

        <div className="card-group">
          {data.map((el) => (
            <div className="card" key={el.id}>
              <div className="card_items">
                {/* <div className="card-img">
                  <img src={el.flags.png} alt="" />
                </div> */}

                <div className="card-content">
                  <h3></h3>
                  <p>
                    <span>Id: </span>
                    {el.userId}
                  </p>
                  <p>
                    <span>Title: </span> <br />
                    {el.title}
                  </p>
                  <p>
                    <span>Description: </span> <br />
                    {el.body}
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

export default Data;
