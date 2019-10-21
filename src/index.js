import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const init = () => {
  ReactDOM.render(<App moviesNames={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}/>,
      document.getElementById(`root`));
};
init();
