// Add new functions, variables here
function songuyento(input, i, arr="") {
  while (input != 1) {
    if (input % i == 0) {
      arr = arr+i + ""
      input = input / i
    }
    else {
      i++
    }
  }
}



function main(input) {
  let i = 2;
  let arr = "";
  if ( input == 1){
    return 1;
  }
  else if ( input == 0){
    return 0;
  }
  else{
  songuyento(input,i,arr);
  console.log (arr);
}
}
  module.exports = main;
