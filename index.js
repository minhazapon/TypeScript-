"use strict";
/////basic typescript //////
function Numz(a, b) {
    const all = a * b;
    console.log(all);
}
Numz(10, 20);
function Numzz(a, b) {
    const all = a + b;
    const allN = 20 * all;
    console.log('alls result is >', allN);
    if (allN > 50) {
        console.log('all Is good');
    }
    else {
        console.log('all is not good');
    }
}
Numzz(500, 700);
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
const tea = 'chayer dam 500';
const coffe = 500;
const sylethIsTeaCountry = true;
console.log(tea, coffe, sylethIsTeaCountry);
const typeScript = 'this is better than js';
const js = 5000;
const all = true;
console.log(typeScript, js, all);
//////array of union type////////
let w = ['apon', 'mernStack', 'fullStack', 50, 'javaScript', 8989,];
console.log(w);
let aponSkills = ['javaScript', 'typeScript', 'react.js', 'next.js', 'node.js', 'express.js', 'mongodb', 'mongoose'];
console.log(aponSkills);
let aponFavFoodz = ['kabab and luchi', 'biriyani', 'khechuri tiger murgi', 'razhash meat', 'etc'];
console.log(aponFavFoodz);
///////object union type////////
let oj;
oj = {
    namez: 'minhaz',
    address: 'jheniadah',
    number: 1950374409,
    forenTour: false,
    religion: 'islam'
};
let ojs;
ojs = {
    name: 'minhaz',
    skills: 'softwareEngineering',
    address: 'jheniadah',
    number: 1950374409
};
let company;
let object = {
    name: 'toptal',
    name1: 'zelf',
    name2: 'kodezen'
};
console.log(object.name1);
console.log(object.name2);
console.log(object.name);
/////////Dynamic Type//////////////////
//////// any type of typeScript////////
let pata;
let pata1;
let pata2;
pata = 'gach',
    pata1 = 20,
    pata2 = true;
console.log(pata, pata1, pata2);
let tree1;
let tree2;
let tree3;
tree1 = 'bangladesh',
    tree2 = 989898,
    tree3 = true;
console.log(tree1, tree2, tree3);
let com;
let FoodPrice;
com = 'toptal',
    FoodPrice = 5000;
console.log(com);
console.log(FoodPrice);
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
let fuZ = (d, f) => {
    const allQ = d + f;
    console.log(allQ);
};
fuZ(20, 50);
let Fnz = (f, l, v) => {
    const allValue = f * l / v;
    return allValue;
};
const Re = Fnz(30, 40, 50);
console.log('this re func ...> ', Re);
const bangladesh = 50;
const india = 'india is a divine city';
const aponAge = 23;
console.log(bangladesh, india, aponAge);
const FuncZ = (mangoPrice, mangoReview) => {
    console.log(mangoPrice, mangoReview);
};
FuncZ(500, 'veryGood');
const FNC = (vv, bb) => {
    console.log(vv, bb);
};
FNC(80, 90);
///////////////////// Function Signatures /////////////////////////
let Add;
Add = (m, n) => {
    const all = m + n;
    return all;
};
const numZ = Add(20, 40);
console.log(numZ);
let Fs;
Fs = (z, x) => {
    const allX = z + x;
    return allX;
};
const xx = Fs(1000, 4000);
console.log(xx);
let allFrutZ = {
    apple: 34,
    mango: 50
};
console.log(allFrutZ.apple);
console.log(allFrutZ.mango);
const allFaces = {
    shemanto: 'they are frnz',
    apon: 'they are frndZ'
};
console.log(allFaces.shemanto);
console.log(allFaces.apon);
const Gall = {
    apon: 'fullName: minhazul abedin apon',
    address: 'jhenaidah',
    data: {
        name: 'apon',
        profession: 'software engineer'
    }
};
console.log(Gall.apon);
console.log(Gall.address);
console.log(Gall.data);
const GeR = {
    mac: 1500000,
    windows: 2000,
    linux: {
        manzero: 'good',
        kalin: 'good',
        fedro: 'very Good'
    }
};
// console.log(GeR.linux.manzero)
//////////////Enum Types of typeScript///////////////////////////
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCESS"] = 0] = "SUCCESS";
    Rtype[Rtype["failure"] = 1] = "failure";
    Rtype[Rtype["number"] = 2] = "number";
    Rtype[Rtype["forbid"] = 3] = "forbid";
})(Rtype || (Rtype = {}));
const allO = {
    name: 'apon'
    // nuZ: Rtype.SUCCESS
};
///////////////////tuples of typeScript/////////////////
let arr = [1000, 'minhazTheFullStack', { w: 20 }];
console.log(arr);
let arr1 = [20000, 'aponTheSoftware Engineer', { K: 10000 }];
console.log(arr1);
