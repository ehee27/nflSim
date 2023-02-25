import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';

const TeamsList = ({ teams }) => {
  // create a 'search' state value
  const [search, setSearch] = useState('');
  console.log(typeof teams);

  // create searchresults state
  const [searchResults, setSearchResults] = useState([]);

  // setUseEffect to render teams, but also the filtered search
  // useEffect(() => {
  //   const filteredTeams = teams.filter(team =>
  //     team.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResults(filteredTeams);
  // }, [teams, search]);

  return (
    <div>
      <form className="searchForm" onSubmit={e => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Teams"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>

      <div className="CardContainer">
        {teams.map(team => {
          return (
            <div key={team.id}>
              <TeamCard team={team} teams={teams} />
            </div>
          );
        })}
        {/* {searchResults.map(team => {
          return (
            <div key={team.id}>
              <TeamCard team={team} teams={teams} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default TeamsList;
