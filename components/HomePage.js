import React, { Component, Fragment } from "react";
import TeamsList from "./TeamsList";
import GamesList from "./GamesList";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TeamsList />
        <GamesList />
      </Fragment>
    );
  }
}
