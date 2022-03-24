import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Containers/Home";
import Blog from "./Containers/Blog";
import BlogDetail from "./Containers/BlogDetail";
import 'react-toastify/dist/ReactToastify.css';

const Routes = () => {
  return (
    <Router>
      <ToastContainer position="top-center"/>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:blogDetail" exact component={BlogDetail} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default Routes;
