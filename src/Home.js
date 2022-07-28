import React from "react";
import squirrel from "./resources/squirrel.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to Caleb's Demo App</h1>
      <h2>Please feel free to use this to test and spin up new content</h2>
      <img src={squirrel} alt="a cute little squirrel peering at you from the tall grass"></img>
    </div>
  );
};

export default Home;


