import React, { useState, useEffect } from "react";
import axios from "axios";
import KEY from "../../config";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./ListOfLeagues.scss";

const ListOfLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [filteredLeagues, setFilteredLeagues] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.football-data.org/v2/competitions",
        {
          headers: {
            "X-Auth-Token": KEY,
          },
          params: {
            areas: 2077, //Europe area id
            plan: "TIER_ONE", 
          },
        }
      );
      setLeagues(data.competitions);
      setFilteredLeagues(data.competitions);
    };
    search();
  }, []);

  const filterItems = (search) => {
    if (!!search.length) {
      const newLeagues = leagues.filter((l) => l.name.includes(search));
      setFilteredLeagues(newLeagues);
    } else {
      setFilteredLeagues(leagues);
    }
  };

  const renderedItems = filteredLeagues.map((league) => {
    return (
      <li className="leagues__item" key={league.id}>
        <Link className="leagues__link" to={`/teams/${league.id}`}>
          {league.name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <SearchBar onChange={(searchText) => filterItems(searchText)} />
      <div className="leagues">
        <ul className="leagues__list">{renderedItems}</ul>
      </div>
    </div>
  );
};

export default ListOfLeagues;
