import * as React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1> Home</h1>
      <p>
        Welcome to this interface that will allow you to manage your events.{" "}
      </p>
      <p>You can add an event <a href="/form">here</a>.</p>
      <p>Or see the list of events <a href="/list">here</a>.</p>
    </div>
  );
};

export default Home;
