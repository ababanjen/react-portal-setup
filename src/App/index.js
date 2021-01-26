import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import storage from "@utils/redux/store";
import { Provider } from "react-redux";

// import { GlobalProvider } from '@contexts/GlobalContext'
import { renderRoutes } from "react-router-config";

// import '@styles/app.scss'
import routes from "./routes";

const App = () => (
  <Provider store={storage}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>
);

export default App;
