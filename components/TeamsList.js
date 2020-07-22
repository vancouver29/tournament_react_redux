import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TeamsList extends Component {
  render() {
    return (
      <div id="teams-list">
        <h1>Teams</h1>
        {this.props.teams.map((team, index) => {
          return (
            <div key={index} className="team">
              <Link to={"/teams/id/" + team.id}>{team.name}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("teams state:", state);
  return {
    teams: state.topLevelTeamsStoreSpace.teams,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
