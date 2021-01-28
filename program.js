// Add new functions, variables here
function songuyento(input, i, arr = " ") {
  while (input != 1) {
    if (input % i == 0) {
      arr = arr + i + " "
      input = input / i
    }
    else {
      i++
    }
   }return arr;
}



function main(input) {
  let i = 2;
  let arr = " ";
  if (input == 1) {
    return console.log("1")
;
  }
  else if (input == 0) {
    return console.log("0")
;
  }
  else {
    songuyento(input, i, arr);
    console.log(songuyento(input,i,arr));
  }
}
module.exports = main;
