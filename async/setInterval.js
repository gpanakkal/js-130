/**
 * 1. 
 */

function startCounting() {
  let i = 1;
  return setInterval(() => {
    console.log(i);
    i += 1;
  }, 1000);
}

const intervalId = startCounting();

function stopCounting(intervalId) {
  clearInterval(intervalId);
}

setTimeout(() => stopCounting(intervalId), 5010);
