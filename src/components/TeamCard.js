import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
  return (
    <div className="TeamCard">
      <Link to={`/teams/${team.id}`}>
        <h2>{team.name}</h2>

        <h3>{team.division}</h3>
        <p>
          {team.wins} - {team.losses}
        </p>
      </Link>
    </div>
  );
};

export default TeamCard;
