import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class TeamDetailPage extends Component {
  getTeam() {
    const id = this.props.match.params.id;
    const team = this.props.teams.reduce((found, team) => {
      if (found) {
        return found;
      }

      if (found || team.id == id) {
        return team;
      } else return false;
    }, false);

    return team;
  }

  render() {
    let team = this.getTeam();

    return (
      <div id="team-detail">
        <h1>{team.name}</h1>
        <ul>
          {team.members.map((member, index) => {
            return <li key={index}>{member}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const teams = state.topLevelTeamsStoreSpace.teams;
  return {
    teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailPage);
