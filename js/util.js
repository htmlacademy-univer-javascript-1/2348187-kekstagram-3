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

lenghtCheck('ahahha', 123);

export {getRand};
