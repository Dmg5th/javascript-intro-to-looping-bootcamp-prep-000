function forLoop(array){
for(let i = 0; i < 25; i++){
   if(i === 1){
    array.push("I am 1 strange loop.")
   } else {
     array.push(`I am ${i} strange loops.`)
   }
  }
  return array
}

function whileLoop(number){
  let i = 0;
  while(i < number) {
    console.log(number)
    number --
  }
  return "done"
}

let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(integer){
  do {
    console.log("I run regardless.");
  } while
  (incrementVariable() <= integer)

}












