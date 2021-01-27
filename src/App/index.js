import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import storage from "@utils/redux/store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/app.scss'
import routes from "./routes";
const App = () => (
  <Provider store={storage}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>
);

export default App;
