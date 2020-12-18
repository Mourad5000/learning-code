import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TheNavbar from "./components/NavbarComponent/NavbarComponent/TheNavbar";
import Header from "./components/HeaderComponent/Header";
import Dashboard from "./components/DashboardComponent/Dashboard";
import HeroList from "./components/HeroesListComponent/HeroeList";
import Footer from "./components/FooterComponent/Footer";
import HeroDetail from "./components/HeroDetailComponent/HeroDetail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TheNavbar />
      <Header />
      <Switch>
        <Route path="/heroes/:heroId" exact component={HeroDetail} />
        <Route path="/heroesList" exact component={HeroList} />
        <Route path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
