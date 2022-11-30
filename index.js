const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm ${userInfo.myName} and I'm a Wilder in campus ${userInfo.campus} !`,
    e: "oO",
    t: "U ",
}));