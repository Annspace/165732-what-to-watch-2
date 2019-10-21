import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const init = () => {
  const clickTitleHandler = () => {};
  ReactDOM.render(<App moviesNames={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]} onClickTitle={clickTitleHandler}/>,
      document.getElementById(`root`));
};
init();
