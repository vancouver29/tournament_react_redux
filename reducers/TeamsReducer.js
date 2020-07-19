// keep track of teams, team names and team member

const teamsReducer = (state, action) => {
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
};

export default teamsReducer;
