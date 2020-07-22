// keep track of teams, team names and team member
import { CREATE_TEAM } from "./TeamsActions";

function initialState() {
  return {
    teams: [
      {
        id: 2345,
        name: "Purple Parrots",
        members: ["Beth", "Roger", "Alice"],
      },
      {
        id: 98345,
        name: "Blue Parrots",
        members: ["Kenny", "Julie", "Paul"],
      },
    ],
  };
}

const teamsReducer = (state, action) => {
  console.log("action", action);
  if (state == undefined) {
    return initialState();
  }

  switch (action.type) {
    case CREATE_TEAM: {
      const teams = [...state.teams, action.team];
      return { teams };
    }

    default: {
      return state;
    }
  }
};

export default teamsReducer;
