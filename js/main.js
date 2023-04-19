function getRand(min, max) {
  if (min < 0 || max < 0) {
    return '';
  }
  if (min > max) {
    return '';
  }
  if (min === max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lenghtCheck(str, maxLen) {
  if (str.length <= maxLen) {
    return true;
  }

  return false;
}
lenghtCheck('AHAHAH', 2);
const objCount = 25;

let ID = 0;

function createObj () {
  ID++;
  return {
    id: `${ID}`,
    url: `photos/.${ID}jpg`,
    description: `this is picture number ${ID}`,
    likes: getRand(15, 200),
    comments: getRand(0, 200)
  };
}

const randObj = Array.from({length: objCount}, createObj);

console.log(randObj);
