import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTeams } from '../store';
import Header from './Header';
import Home from './Home';
import TeamsList from './TeamsList';
import TeamDetails from './TeamDetails';
// import HeadToHead from './HeadToHead';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  // enable dispatch
  const dispatch = useDispatch();

  // fetch the teams
  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  const teams = useSelector(state => state.teams);
  console.log(teams);

  return (
    <div>
      <Router>
        <Header title="NFL STATS" />
        <div className="App">
          {/* <HeadToHead teams={teams} /> */}

          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/teams" element={<TeamsList teams={teams} />} />
            <Route
              exact
              path="/teams/:id"
              element={<TeamDetails teams={teams} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
