module.exports = function reverse (n) {
  let str = n + '',
      tempStr = '';
  for (let i = str.length - 1; i >= 0; i--){
      if(str[i] === '-') continue
      tempStr += str[i];
  }
  return tempStr * 1;
};
