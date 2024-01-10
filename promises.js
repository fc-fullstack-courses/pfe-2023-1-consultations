
function load () {
  const result = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

  return result;
}

load().then(users => console.log(users));

async function test () {
  return 10;
}


async function load2 () {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');

  // const task = await test();

  // console.log(task);

  console.log(await test());

  return await result.json();
}

load2().then(users => console.log(users));