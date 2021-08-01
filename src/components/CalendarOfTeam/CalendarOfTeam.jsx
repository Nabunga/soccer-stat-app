import React, { useState, useEffect } from "react";
import axios from "axios";
import KEY from "../../config";
import "./CalendarOfTeam.scss";

const CalendarOfTeam = ({ startDate, endDate }) => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [teamMatches, setTeamMatches] = useState([]);
  const [tenItems, setTenItems] = useState([]);

  const teams = [
    {
      name: "Arsenal",
      id: 57,
    },
    {
      name: "Aston Villa",
      id: 58,
    },
    {
      name: "Chelsea",
      id: 61,
    },
    {
      name: "Everton",
      id: 62,
    },
    {
      name: "Liverpool",
      id: 64,
    },
  ];

  const renderedTeams = teams.map((team) => {
    return (
      <option className="select__option" key={team.id} value={team.id}>
        {team.name}
      </option>
    );
  });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://api.football-data.org/v2/teams/${selectedTeam}/matches`,
        {
          headers: {
            "X-Auth-Token": KEY,
          },
          params: {
            dateFrom: startDate,
            dateTo: endDate,
          },
        }
      );
      setTeamMatches(data.matches);
    };
    search();
  }, [selectedTeam]);

  useEffect(() => {
    const firstTenItems = teamMatches.slice(0, 10);
    setTenItems(firstTenItems);
  }, [teamMatches]);

  const renderedInfo = tenItems.map((item) => {
    return (
      <div className="rendered-info__item" key={item.id}>
        <p className="rendered-info__item-detail">
          Start season: {item.season.startDate}
        </p>
        <p className="rendered-info__item-detail">
          End season: {item.season.endDate}
        </p>
        <p className="rendered-info__item-detail">Stage: {item.stage}</p>
        <p className="rendered-info__item-detail">Status: {item.status}</p>
        <p className="rendered-info__item-detail">
          Away Team: {item.awayTeam.name}
        </p>
        <p className="rendered-info__item-detail">
          Home Team: {item.homeTeam.name}
        </p>
        <p className="rendered-info__item-detail">
          Goals by Away team: {item.score.fullTime.awayTeam}
        </p>
        <p className="rendered-info__item-detail">
          Goals by Home team: {item.score.fullTime.homeTeam}
        </p>
        <p className="rendered-info__item-detail">
          Winner: {item.score.winner}
        </p>
      </div>
    );
  });

  if (tenItems.length >= 10) {
    return (
      <div className="select">
        <select
          className="select__select"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {renderedTeams}
        </select>
        <div className="rendered-info">{renderedInfo}</div>
      </div>
    );
  }
  return (
    <div className="select">
      <select
        className="select__select"
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        {renderedTeams}
      </select>
      <p className="select__text">
        Waiting for select a league. <br />
        If refulsts is not appear, try to select another league or range of
        dates!
      </p>
    </div>
  );
};

export default CalendarOfTeam;
