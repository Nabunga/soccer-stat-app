import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import ListOfLeagues from "../ListOfLeagues/ListOfLeagues";
import ListOfTeams from "../ListOfTeams/ListOfTeams";
import TeamsOfLeague from "../TeamsOfLeague/TeamsOfLeague";
import CalendarOfLeague from "../CalendarOfLeague/CalendarOfLeague";
import CalendarOfTeam from "../CalendarOfTeam/CalendarOfTeam";
import "../../styles/reset.scss";
import "./App.scss";

const App = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Router>
      <Nav />
      <main>
        <section className="date-picker">
          <label className="date-picker__label" htmlFor="start-date">
            Date from:
          </label>
          <input
            className="date-picker__input"
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label className="date-picker__label" htmlFor="end-date">
            Date to:
          </label>
          <input
            className="date-picker__input"
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </section>
        <div>
          <Switch>
            <Route path="/" exact component={ListOfLeagues} />
            <Route path="/teams" exact component={ListOfTeams} />
            <Route path="/teams/:id" component={TeamsOfLeague} />
            <Route
              path="/league-calendar"
              render={(props) => (
                <CalendarOfLeague
                  {...props}
                  startDate={startDate}
                  endDate={endDate}
                />
              )}
            />
            <Route
              path="/team-calendar"
              render={(props) => (
                <CalendarOfTeam
                  {...props}
                  startDate={startDate}
                  endDate={endDate}
                />
              )}
            />
          </Switch>
        </div>
      </main>
      <footer className='footer'>Created by Loginov Andrey for Simbirsoft</footer>
    </Router>
  );
};

export default App;
