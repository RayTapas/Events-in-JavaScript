let myDate = new Date()
console.log(myDate.toLocaleDateString());
console.log(myDate.getFullYear());
console.log(myDate.getTime());
let number = Number (1000)
console.log(number);
console.log(typeof number);
console.log();
let myNumber = String(1000)
console.log(myNumber);
console.log(typeof myNumber);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const accountId = Number(123456)
let accountName = "Tapas Ray"
let accountEmail = "tapasray201@gmail.com"
let accountPassword = "7978678979@tT"
let accountCity = "Odisha"
console.table([accountId,accountName,accountEmail,accountPassword,accountCity]);

accountName = "Taniya Ray"
accountEmail = "taniyaray147@gmail.com"
accountPassword = "2221133"
accountCity = "Bargarh"
console.table([accountId,accountName,accountEmail,accountPassword,accountCity]);
console.log(accountId,accountName,accountEmail,accountPassword,accountCity);

const jsUser = {
name: "Tapas Ray",
id: "1234",
Email: "tapasray207@gmail.com"
}
console.log(jsUser);
const {Email: n} = jsUser
console.log(n);

jsUser.greetings = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetings());

