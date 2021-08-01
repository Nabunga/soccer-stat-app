import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import KEY from "../../config";
import "./ListOfTeams.scss";

const ListOfTeams = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.football-data.org/v2/competitions/2016/teams",
        {
          headers: {
            "X-Auth-Token": KEY,
          },
        }
      );
      setTeams(data.teams);
      setFilteredTeams(data.teams);
    };
    search();
  }, []);

  const filterItems = (search) => {
    if (!!search.length) {
      const newTeams = teams.filter((t) => t.name.includes(search));
      setFilteredTeams(newTeams);
    } else {
      setFilteredTeams(teams);
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

export default ListOfTeams;
