import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./style.css";
import HomePage from "./components/HomePage";
import TeamDetailPage from "./components/TeamDetailPage";
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
        <p>
          <Link to="/">Home</Link>
        </p>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/teams/:id" component={TeamDetailPage} />
        <Route exact path="/games/:id" component={GameDetailPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
