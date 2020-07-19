import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./style.css";
import HomePage from "./components/HomePage";
import TeamDetailPage from "./components/TeamDetailPage";

import teamsReducer from "./reducers/TeamsReducer";
import gamesReducer from "./reducers/GamesReducer";

const reducer = combineReducers({
  topLevelTeamsStoreSpace: teamsReducer,
  topLevelGamesStoreSpace: gamesReducer,
});

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/teams/:id" component={TeamDetailPage} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
