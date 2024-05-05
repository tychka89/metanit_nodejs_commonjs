const os = require('os');
const greeting = require('./greeting');
const User = require('./user');

const userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
greeting.printMessage(userName);

const nata = new User('Nata', 35);
nata.print();
nata.sayHi();
