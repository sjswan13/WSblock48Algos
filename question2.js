function timeToBuyTickets(tickets, k) {
  let time = 0;

  while (tickets[k] > 0) {
    for(let i = 0; i < tickets.length; i++) {
      if(tickets[i] > 0) {
        tickets[i] --;
        time++;

        if (tickets[k] === 0 && i === k) {
          return time;
        }
      }
    }
  }
  return time;
}

const tickets = [2, 3, 2];
const k = 2;
console.log(timeToBuyTickets(tickets, k));