import React from "react";
import { useParams } from "react-router-dom";
const SingleAbout = () => {
  const { id } = useParams();
  return <div>SingleAbout {id}</div>;
};

export default SingleAbout;
