

const country = 'khilfat jheniadah inshallah'
console.log(country) 

const n = 2;
const a = 2;
console.log(n + a);


const aponTech= [ 'javaScript', 'typeScript', 'reactjs', 'nodejs', 'mongodb', 'mongoose' ]

console.log(aponTech)


const nz = 2000; 
const az = 5000;
const zan = az + nz
console.log(zan)


const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
  
  console.log(user.firstName)
  // Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.


const h = 2;
const i = 1;
const all = h + i  
console.log(all)  


/////basic typescript //////


function Numz(a : number, b : number){


     const all = a * b 

     console.log(all)


}

Numz(10, 20)


let aponAddress = {

    name: 'minhazul abedin apon',
    location: 'jheniadah',
    profession: 'full Stack Engineer'


}

console.log(aponAddress.location)



//////////////  Explicit & Union Types ///////////////////////


//normal variable/////

const count : string = 'bangladesh'

const nos : number = 1950374409 

const bolz : boolean = true 

console.log(count, nos, bolz)


//////array of union type////////


let w : (string | number)[] = [ 'apon', 'mernStack', 'fullStack', 50, 'javaScript', 8989,  ]

console.log(w)



///////object union type////////


let oj : object 

oj = {

 namez: 'minhaz',
 address: 'jheniadah',
 wifeName: 'farzana moutushi ponny',
 number: 1950374409,
 forenTour: false,
 religion: 'islam' 


}

// console.log(oj.namez)
// console.log(oj.address)
// console.log(oj.wifeName)
// console.log(oj.number)
// console.log(oj.forenTour)
// console.log(oj.religion)


//////////////  Explicit & Union Types ///////////////////////



/////////Dynamic Type//////////////////


//////// any type of typeScript////////


let pata: any;
let pata1: any;
let pata2: any;


pata = 'gach',
pata1 = 20,
pata2 = true 

console.log(pata, pata1, pata2)




/////////Dynamic Type//////////////////