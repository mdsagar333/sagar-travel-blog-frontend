import React, { useContext } from "react";
import useContextAPI from "../../Hooks/useContextAPI";
import Header from "../Conponent/Header";

const Home = () => {
  const name = useContextAPI();
  console.log(name);
  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
