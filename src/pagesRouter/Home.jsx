import * as React from "react";
import BeforePage from "./before";
import AfterPage from "./after";
import PelatihanPage from "../Pages/Pelatihan";
import SignInPage from "../userStorage/signIn";
import SignUpPage from "../userStorage/signUp";
import BlogPage from "../Pages/detailPelatihan/Detail";
import TemaPage from "../Pages/detailPelatihan/DetailTema";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <Switch>
      <Route exact path="/detailPelatihan">
          <BlogPage />
        </Route>
        <Route exact path="/detailTema">
          <TemaPage />
        </Route>
        <Route exact path="/after">
          <AfterPage />
        </Route>
        <Route exact path="/signIn">
          <SignInPage />
        </Route>
        <Route exact path="/signUp">
          <SignUpPage />
        </Route>
        <Route exact path="/pelatihan">
          <PelatihanPage />
        </Route>
        <Route exact path="/">
          <BeforePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
