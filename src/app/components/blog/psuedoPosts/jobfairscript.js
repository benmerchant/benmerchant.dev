const fs = require('fs');

// class would be better
const spaceMap = {
  "spaces": [],
  "words": []
};

getSpacePositions(spaceMap, (result,thefile) => {

  splitArray(result,thefile,(finalObjectToMakeJson) => {
    const jsonString = JSON.stringify(finalObjectToMakeJson);
    fs.writeFile('newJobFairList.json',jsonString,(err) => {
      if(err) throw err;
      console.log('Job\'s Done!');
    });
  });
});

function getSpacePositions(spaceMapObjArg, cb) {
  fs.readFile('./all_employers.txt', 'utf8', (err, file) => {
    if(err) throw err;
    else {
      for(let i=0;i<file.length;i++){
        if(file[i] === ' ') spaceMapObjArg.spaces.push(i);
      }
      cb(spaceMapObjArg,file);
    }
  });
}

function splitArray(spaceMapArgWithPositions,thefile, cb){
  let tempStr = '';
  spaceMapArgWithPositions.words = spaceMapArgWithPositions.spaces.map(function(val,i,origArr){
    if(i===0){
      tempStr = thefile.substring(0,origArr[i]);
      spaceMapArgWithPositions.words.push({"word":tempStr,"position":val});
    } else if(i>0 && i<origArr.length-1){
      tempStr = thefile.substring(origArr[i-1]+1,origArr[i]);
      spaceMapArgWithPositions.words.push({"word":tempStr,"position":val});
    } else if (i===origArr.length-1) {
      tempStr = thefile.substring(origArr[i]+1);
      spaceMapArgWithPositions.words.push({"word":tempStr,"position":val});
      cb(spaceMapArgWithPositions);
    }
  });
}
