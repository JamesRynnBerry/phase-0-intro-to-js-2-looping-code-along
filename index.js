const cards = [];

function writeCards(array){
  for(let i=0; i<array.length; i++){
  
    cards.message = `Thank you, ${array[i]}, for the wonderful surprise gift!`
    cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
  }
  return cards;
}
writeCards(names, "eventName")

function countDown(init = 10){
  while (init >= 0) {
    console.log(init--)
  }
}