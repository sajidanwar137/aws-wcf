import React from "react";
import { Provider } from "react-redux";
import "./common.scss";
import Routes from "./Routes";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
 )
};
export default App;
