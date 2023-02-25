// import React, { useState } from 'react';
// import BarChart from './BarChart';

// const HeadToHead = teams => {
//   const teamArray = teams.teams;
//   const [team1, setTeam1] = useState('');
//   const [team2, setTeam2] = useState('');

//   // set a state var and update from true to false to display the chart!!!]
//   const [results, setResults] = useState('Off');
//   const [display, setDisplay] = useState('Off');

//   const toggleResults = () => {
//     console.log(team1, team2);
//     setResults(!results);
//   };

//   const handleSelection1 = e => {
//     setTeam1(e.target.value);
//   };
//   const handleSelection2 = e => {
//     setTeam2(e.target.value);
//   };
//   // pushes the 2 updated state values (team 1 & 2) into result and triggers the filter
//   const handleSubmit = e => {
//     e.preventDefault();
//     let result = [];
//     let targetTeam1 = teamArray.filter(team => team.name === team1);
//     setTeam1(targetTeam1);
//     console.log('this is what was set in team1', targetTeam1);
//     let targetTeam2 = teamArray.filter(team => team.name === team2);
//     setTeam2(targetTeam2);
//     console.log('this is what was set in team2', targetTeam2);

//     // setChart(targetTeam1, targetTeam2);
//     setDisplay(!display);
//   };
//   // take in the two teams - set the data object based off the two
//   const setChart = (team1, team2) => {
//     const headToHeadData = {
//       labels: team1?.seasons?.map(team => team.year),
//       datasets: [
//         {
//           label: 'Chargers',
//           data: team1?.seasons?.map(team => team.totPassYds),
//         },
//         {
//           label: [`${team2?.name}`],
//           data: team2?.seasons?.map(team => team.totPassYds),
//         },
//       ],
//     };
//     return headToHeadData;
//   };

//   return (
//     <div className="HeadToHead">
//       <form action="submit" onSubmit={handleSubmit}>
//         <label htmlFor="team1">TEAM 1</label>
//         <select onChange={handleSelection1}>
//           <option value="please select">Select team</option>
//           {teamArray.map(item => (
//             <option key={item.name} value={item.name}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         <label htmlFor="team2">TEAM 2</label>
//         <select onChange={handleSelection2}>
//           <option value="please select">Select team</option>
//           {teamArray.map(item => (
//             <option key={item.name} value={item.name}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         <button>SUBMIT</button>
//       </form>
//       <div className={display ? 'Off' : 'On'}>
//         <button onClick={toggleResults}>Display Results</button>
//       </div>

//       <div className={results ? 'Off' : 'On'}>
//         <BarChart chartData={setChart(team1, team2)} />
//       </div>
//     </div>
//   );
// };

// export default HeadToHead;
