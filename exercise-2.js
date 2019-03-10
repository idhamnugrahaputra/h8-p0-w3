// exercise 2; week 3; selasa;
function balikString(str){
  var newStr = '';
  for (var i = str.length -1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
console.log(balikString('hello world!'));
