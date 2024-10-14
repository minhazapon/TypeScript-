"use strict";
const country = 'khilfat jheniadah inshallah';
console.log(country);
const n = 2;
const a = 2;
console.log(n + a);
const aponTech = ['javaScript', 'typeScript', 'reactjs', 'nodejs', 'mongodb', 'mongoose'];
console.log(aponTech);
const nz = 2000;
const az = 5000;
const zan = az + nz;
console.log(zan);
const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
};
console.log(user.firstName);
// Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.
const h = 2;
const i = 1;
const all = h + i;
console.log(all);
/////basic typescript //////
function Numz(a, b) {
    const all = a * b;
    console.log(all);
}
Numz(10, 20);
let aponAddress = {
    name: 'minhazul abedin apon',
    location: 'jheniadah',
    profession: 'full Stack Engineer'
};
console.log(aponAddress.location);
//////////////  Explicit & Union Types ///////////////////////
//normal variable/////
const count = 'bangladesh';
const nos = 1950374409;
const bolz = true;
console.log(count, nos, bolz);
let frontEnd = 'javaScript, reactjs';
let backEnd = 'nodeJs, express.js';
console.log(frontEnd, backEnd);
//////array of union type////////
let w = ['apon', 'mernStack', 'fullStack', 50, 'javaScript', 8989,];
console.log(w);
///////object union type////////
let oj;
oj = {
    namez: 'minhaz',
    address: 'jheniadah',
    number: 1950374409,
    forenTour: false,
    religion: 'islam'
};
/////////Dynamic Type//////////////////
//////// any type of typeScript////////
let pata;
let pata1;
let pata2;
pata = 'gach',
    pata1 = 20,
    pata2 = true;
console.log(pata, pata1, pata2);
/////////Dynamic Type//////////////////
///////function of typeScript///////////////////
const Func = (a, b, c, d) => {
    const allFunc = a * b * c * d;
    const all = allFunc + 90;
    console.log(all);
    if (all > 10) {
        console.log('code is true');
    }
    else {
        console.log('code is not true');
    }
};
Func(20, 50, 60, 70);
const bangladesh = 50;
const india = 'india is a divine city';
const aponAge = 23;
console.log(bangladesh, india, aponAge);
const FuncZ = (mangoPrice, mangoReview) => {
    console.log(mangoPrice, mangoReview);
};
FuncZ(500, 'veryGood');
///////////////////// Function Signatures /////////////////////////
let Add;
Add = (m, n) => {
    const all = m + n;
    return all;
};
const numZ = Add(20, 40);
console.log(numZ);
