// Code your solutions in this file
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }

  return messages;
};

function countDown(integer) {
  let count = integer;
  while (count >= 0) {
    console.log(count);
    count--;
  }
};

