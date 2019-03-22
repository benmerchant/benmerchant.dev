import JOBFAIRJSON from '../jobfair/neewJobFairList.json';

fs.readFile('./all_employers.txt', 'utf8', (err, file) => {
  if(err) throw err;
  else console.log(JOBFAIRJSON);




  }
});
