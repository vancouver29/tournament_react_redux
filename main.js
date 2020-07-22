import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./style.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

import TeamDetailPage from "./components/TeamDetailPage";
import TeamCreatePage from "./components/TeamCreatePage";

import GameDetailPage from "./components/GameDetailPage";

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
      <div id="app-container">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/teams/create" component={TeamCreatePage} />
        <Route exact path="/teams/id/:id" component={TeamDetailPage} />
        <Route exact path="/games/id/:id" component={GameDetailPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
