function groupAnimals(animals) {
  let sort = animals.sort();
  let letter = [];
  for (let i of sort) {
    let firstLetter = i.charAt(0);
    let isDuplicateLetter = letter.includes(firstLetter);
    if(!isDuplicateLetter) {
      letter.push(firstLetter)
    }
  }

  let result = [];
  for(let x of letter) {
    let res = sort.filter((val, idx, data) => {
      return val.charAt(0) == x
    })
    result.push(res);
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
