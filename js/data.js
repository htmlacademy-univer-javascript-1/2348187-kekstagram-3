import {getRand} from './util.js';

const objCount = 25;

let ID = 0;

function createObj () {
  ID++;
  return {
    id: `${ID}`,
    url: `photos/${ID}.jpg`,
    description: `this is picture number ${ID}`,
    likes: getRand(15, 200),
    comments: getRand(0, 200)
  };
}


const randObj = Array.from({length: objCount}, createObj);

export {randObj};
