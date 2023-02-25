import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chiefs, team1 } from '../Data';
import BarChart from './BarChart';

const TeamDetails = ({ teams }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // single team from state
  // const { team } = useSelector(state => state);

  // const teamArray = teams.filter(team => team.id === id);

  // const team = teamArray.reduce((acc, curr) => {
  //   return (acc = curr);
  // }, {});
  // console.log(team);
  // const pass = team.totalYdsPassing;

  // if (team.seasons) {
  //   console.log(typeof team.seasons);
  // }
  // console.log(team.seasons.0)

  // console.log(Object.keys(team.seasons));
  // const result = Object.keys(team.seasons);
  // console.log(result);
  // console.log(team.seasons instanceof Array);
  // const years = [...team]

  // if (team?.seasons) {
  //   const years = team.seasons.map(season => season.year);
  // }

  // if (chiefs.seasons) {
  //   let result = chiefs.seasons.map(season => season.year);
  //   // console.log(typeof result);
  // }

  // const [year, setYear] = useState('');
  // const [stats, setStats] = useState({
  //   labels: ['Total Passing Yards', 'League Average'],
  //   datasets: [
  //     {
  //       label: 'Total Pass Yards',
  //       data: [`${team.totalYdsPassing}`, 4600],
  //     },
  //   ],
  // });

  // chart state
  // const [chartActive, setChartActive] = useState('Off');

  // const setChartData = stat => {
  //   const chartData = {
  //     labels: team?.seasons?.map(data => data.year),
  //     datasets: [
  //       {
  //         label: `${team.name}`,
  //         data: team?.seasons?.filter(data => `${data}.${stat}` === stat),
  //       },
  //     ],
  //   };

  //   return chartData;
  // };

  // const totalOffenseTest = team?.seasons?.map(season => season.totalOffense);
  // console.log(totalOffenseTest);

  // const years = team?.seasons?.map(season => season.year);
  // console.log(years);

  // const [displayTotalOffense, setDisplayTotalOffense] = useState('Off');
  // const toggleDisplayTotalOffense = () => {
  //   setDisplayTotalOffense(!displayTotalOffense);
  // };

  return (
    <div className="TeamDetails">
      <div className="Row-1">
        {/* <h1>{team.name}</h1>
        <h3>{team.division}</h3>
        <BarChart chartData={stats} /> */}

        {/* {team.seasons ? (
          team.seasons.map(season => {
            return (
              <div className="WinLoss" key={season.year}>
                <div>
                  <h2>{season.year}</h2>
                  {season.wins} - {season.losses}
                </div>
                <BarChart chartData={totalOffense} />
              </div>
            );
          })
        ) : (
          <span></span>
        )} */}
      </div>
      <div className="Row-2">
        <div className="Column-1">
          This is Column 1<div></div>
        </div>
        <div className="Column-2">This is Column 2</div>
        <div className="Column-3">This is Column 3</div>
      </div>
    </div>
  );
};

export default TeamDetails;

// set state for all stats - set toggle to reveal charts
// const [passingActive, setPassingActive] = useState('Off');
// const togglePassing = () => {
//   setPassingActive(!passingActive);
// };
// // rushing
// const [rushingActive, setRushingActive] = useState('Off');
// const toggleRushing = () => {
//   setRushingActive(!rushingActive);
// };
// // defense
// const [defenseActive, setDefenseActive] = useState('Off');
// const toggleDefense = () => {
//   setDefenseActive(!defenseActive);
// };

// const [passingStats, setPassingStats] = useState('Off');
// const togglePassingStats = () => {
//   setPassingStats(!passingStats);
// };

// const passingData = {
//   labels: ['Passing Yards Per Game'],
//   datasets: [
//     {
//       label: `${team.name}`,
//       data: team,
//     },
//     {
//       label: 'League AVG.',
//       data: [217.7],
//     },
//   ],
// };

// const rushingData = {
//   labels: ['Rushing Yards Per Game'],
//   datasets: [
//     {
//       label: `${team.name}`,
//       data: [team.rushYdsGame],
//     },
//     {
//       label: 'League AVG.',
//       data: [121.6],
//     },
//   ],
// };
// const defenseData = {
//   labels: ['Yards Allowed Per Game'],
//   datasets: [
//     {
//       label: `${team.name}`,
//       data: [team.totalDefYds],
//     },
//     {
//       label: 'League AVG.',
//       data: [338.8],
//     },
//   ],
// };

// const passingStatsData = {
//   labels: team?.seasons?.map(team => team.year),
//   datasets: [
//     {
//       label: 'Test 1',
//       data: team?.seasons?.map(team => team.totPassYds),
//     },
//   ],
// };

{
  /* <div className="Column-2">
          <button onClick={togglePassing}>Totals Passing</button>
          <button onClick={toggleRushing}>Totals Rushing</button>
          <button onClick={toggleDefense}>Totals Defense</button>
          <button onClick={togglePassingStats}>Passing Trends</button>
        </div> */
}

{
  /* <div className={passingStats ? 'Off' : 'On'}>
          <button onClick={togglePassingStats}>Close</button>
          <div>
            <BarChart chartData={passingStatsData} />
          </div>
        </div>
        <div className={passingActive ? 'Off' : 'On'}>
          <button onClick={togglePassing}>Close</button>
          <div>
            <BarChart chartData={passingData} />
          </div>
        </div>
        <div className={rushingActive ? 'Off' : 'On'}>
          <button onClick={toggleRushing}>Close</button>
          <div>
            <BarChart chartData={rushingData} />
          </div>
        </div>
        <div className={defenseActive ? 'Off' : 'On'}>
          <button onClick={toggleDefense}>Close</button>
          <div>
            <BarChart chartData={defenseData} />
          </div>
        </div> */
}
