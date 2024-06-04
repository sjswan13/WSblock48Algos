function deckRevealedIncreasing(deck) {
  deck.sort((a, b) => a - b);

  let queue = [];
  for(let i = 0; i < deck.length; i++) {
    queue.push(i);
  }
  let result = new Array(deck.length);

  for(let card of deck) {
    result[queue.shift()] = card;

    if(queue.length) {
      queue.push(queue.shift());
    }
  }
  return result;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));