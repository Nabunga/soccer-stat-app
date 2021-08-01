import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import KEY from "../../config";

const TeamsOfLeague = ({ match }) => {
  const [team, setTeam] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://api.football-data.org/v2/competitions/${match.params.id}/teams`,
        {
          headers: {
            "X-Auth-Token": KEY,
          },
        }
      );
      setTeam(data.teams);
      setFilteredTeams(data.teams);
    };
    search();
  }, []);

  const filterItems = (search) => {
    if (!!search.length) {
      const newTeams = team.filter((t) => t.name.includes(search));
      setFilteredTeams(newTeams);
    } else {
      setFilteredTeams(team);
    }
  };

  const renderedItems = filteredTeams.map((team) => {
    return (
      <li className="teams__item" key={team.id}>
        {team.name}
      </li>
    );
  });

  return (
    <div>
      <SearchBar onChange={(searchText) => filterItems(searchText)} />
      <div className="teams">
        <ul className="teams__list">{renderedItems}</ul>
      </div>
    </div>
  );
};

export default TeamsOfLeague;
