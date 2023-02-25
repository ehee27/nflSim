// Team.belongsTo(Division);
// Division.hasMany(Team);

// const [
//   afcWest,
//   afcEast,
//   afcNorth,
//   afcSouth,
//   nfcWest,
//   nfcEast,
//   nfcNorth,
//   nfcSouth,
// ] = await Promise.all([
//   Division.create({
//     name: 'AFC West',
//   }),
//   Division.create({
//     name: 'AFC East',
//   }),
//   Division.create({
//     name: 'AFC North',
//   }),
//   Division.create({
//     name: 'AFC South',
//   }),
//   Division.create({
//     name: 'NFC West',
//   }),
//   Division.create({
//     name: 'NFC East',
//   }),
//   Division.create({
//     name: 'NFC North',
//   }),
//   Division.create({
//     name: 'NFC South',
//   }),
// ]);

// const [chiefs] = await Promise.all([
//   Team.create({
//     name: 'Kansas City Chiefs',
//     divisionName: 'AFC West',
//     totalYdsPassing: 5207,
//     totalYdsRushing: 2023,
//     totalYdsOffense: 7230,
//   }),
// ]);

// chiefs.divisionId = afcWest.id;
// await chiefs.save();
