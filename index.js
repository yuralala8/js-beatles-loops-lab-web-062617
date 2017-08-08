function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; musicians.length > i; i++) {
    let string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}


function johnLennonFacts(facts) {
  let array = [];
  let i = 0;
  while (facts.length > i) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}


function iLoveTheBeatles(number) {
  let array = [];
  do {
    let string = "I love the Beatles!"
    array.push(string)
    number++
  } while (number < 15)
  return array
}
