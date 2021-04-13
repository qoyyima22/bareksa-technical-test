import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(Home));