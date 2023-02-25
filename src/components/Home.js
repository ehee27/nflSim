import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import HeadToHead from './HeadToHead';

const Home = () => {
  const teams = useSelector(state => state.teams);
  console.log(teams);
  return (
    <div className="Home">
      <h1>This is the home...</h1>
      <div>{/* <HeadToHead teams={teams} /> */}</div>
    </div>
  );
};

export default Home;
