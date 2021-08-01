import React, { useState, useEffect } from "react";
import axios from "axios";
import KEY from "../../config";
import "./CalendarOfLeague.scss";

const CalendarOfLeague = ({ startDate, endDate }) => {
  const [currentLeague, setCurrentLeague] = useState("");
  const [matchesOfLeague, setMatchesOfLeague] = useState([]);
  const [tenItems, setTenItems] = useState([]);

  const leagues = [
    {
      name: "Championship",
      id: 2016,
    },
    {
      name: "Premier League",
      id: 2021,
    },
    {
      name: "UEFA Champions League",
      id: 2001,
    },
    {
      name: "European Championship",
      id: 2018,
    },
    {
      name: "Ligue 1",
      id: 2015,
    },
    {
      name: "Bundesliga",
      id: 2002,
    },
    {
      name: "Serie A",
      id: 2019,
    },
    {
      name: "Eredivisie",
      id: 2003,
    },
    {
      name: "Primeira Liga",
      id: 2017,
    },
    {
      name: "Primera Division",
      id: 2014,
    },
  ];

  //Mapping list of leagues for select options
  const options = leagues.map((option) => {
    return (
      <option className="select__option" value={option.id} key={option.id}>
        {option.name}
      </option>
    );
  });

  //Sending GET request after currentLeague state changes
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://api.football-data.org/v2/competitions/${currentLeague}/matches`,
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
      setMatchesOfLeague(data.matches);
    };
    search();
  }, [currentLeague]);

  //Slice array length just for ten items only
  useEffect(() => {
    const firstTenItems = matchesOfLeague.slice(0, 10);
    setTenItems(firstTenItems);
  }, [matchesOfLeague]);

  //Extract relevant info about matches of particular league from array data
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

  //conditional rendering depending from tenItems state
  if (tenItems.length >= 10) {
    return (
      <div className="select">
        <select
          className="select__select"
          onChange={(e) => setCurrentLeague(e.target.value)}
        >
          {options}
        </select>
        <div className="rendered-info">{renderedInfo}</div>
      </div>
    );
  }
  return (
    <div className="select">
      <select
        className="select__select"
        onChange={(e) => setCurrentLeague(e.target.value)}
      >
        {options}
      </select>
      <p className="select__text">
        Waiting for select a league. <br />
        If refulsts is not appear, try to select another league or range of
        dates!
      </p>
    </div>
  );
};

export default CalendarOfLeague;
