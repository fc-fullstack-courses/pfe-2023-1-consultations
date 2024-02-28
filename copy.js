/*
  Види копій:
    1. Поверхневе
    2. Глибоке
*/

/*
  Поверхневе копювання
*/
let data1 = 'test';

let data2 = data1;

data1 = 1235;
console.log(data2);

let data3 = {
  name: 'Test'
};

let data4 = data3;

data3.name = 'User';

console.log(data4 === data3);
// Поверхневе копювання об'єктів
const objCopy1 = {
  ...data3
}
console.log(objCopy1 === data3);

const dataProblem = {
  name: 'User',
  contacts: {
    email: 'mail@user.com',
    phone: '+3800000000000',
    addresses: [
      {
        city: 'Zaporizhzhia'
      },
      {
        city: 'Kyiv'
      }
    ]
  }
}

const objCopy2 = {
  ...dataProblem
}
console.log('==========  obj copy 2 test ===============');
console.log(objCopy2 === dataProblem);
objCopy2.name = 'New test';
console.log(objCopy2);
console.log(dataProblem);
objCopy2.contacts.test= 1234;
console.log(objCopy2);
console.log(dataProblem);
// глибоке копіювання
console.log('================  deep copy test ===============');
const dataDeep = {
  name: 'User',
  contacts: {
    email: 'mail@user.com',
    phone: '+3800000000000',
    addresses: [
      {
        city: 'Zaporizhzhia'
      },
      {
        city: 'Kyiv'
      }
    ]
  }
}

// V1. Старий
const jsonString = JSON.stringify(dataDeep);
const copyDeep1 = JSON.parse(jsonString);
// або
const copyDeep1_5 = JSON.parse(JSON.stringify(dataDeep));
console.log(copyDeep1_5 === dataDeep); // false
console.log(copyDeep1_5.contacts.addresses[0] === dataDeep.contacts.addresses[0]);
// V2. Спеціальна функція  
const copyDeep2 =  structuredClone(dataDeep);
console.log(copyDeep2 === dataDeep); // false
console.log(copyDeep2.contacts.addresses[0] === dataDeep.contacts.addresses[0]);