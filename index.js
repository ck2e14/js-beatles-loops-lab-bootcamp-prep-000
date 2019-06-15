function theBeatlesPlay(musicians, instruments) {
  var firstArray = [];
  for (let i = 0; i < musicians.length; i++) {
    if (i === 0) {
    firstArray.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      firstArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  } 
  return firstArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var secondArray = [];
  while (i < facts.length) {
    secondArray.push(`${facts[i]}!!!`);
    i ++;
  }
  return secondArray;
}

function iLoveTheBeatles(n) {
  var thirdArray = [];
  var i = 1;
  i ++;
  do { 
    thirdArray.push('I love the Beatles!');
  } while (i < 15);
return thirdArray;
}