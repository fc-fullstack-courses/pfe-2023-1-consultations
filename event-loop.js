/*
  Створити функцію яка буде послідовно виводити числа від 1 до 10
  кожну секунду

    setInterval - треба вчасно зупинити інтервал (clearInterval з іфом)
    setTimeout - в цьому випадку треба буде використати рекурсію
*/

function intervalSolution () {
  let counter = 0;

  console.time('interval');

  const intervalId = setInterval(() => {
    console.log(++counter);
    if(counter >= 10) {
      console.timeEnd('interval');
      clearInterval(intervalId);
    }
  }, 1000);
}

function timeoutSolution (counter = 0) {
  if(counter !== 0) console.log(counter);
  if(counter < 10) {
    setTimeout(() =>timeoutSolution(++counter), 1000);
  } else {
    console.timeEnd('timeout');
  }
}

console.time('timeout');
timeoutSolution();

// console.group('name');
// console.log(213);
// console.log(213);
// console.log(213);
// console.log(213);
// console.groupEnd();
