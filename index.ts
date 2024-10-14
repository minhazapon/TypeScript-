

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

let frontEnd: string = 'javaScript, reactjs'

let backEnd: string = 'nodeJs, express.js'

console.log(frontEnd, backEnd)

//////array of union type////////


let w : (string | number)[] = [ 'apon', 'mernStack', 'fullStack', 50, 'javaScript', 8989,  ]

console.log(w)



///////object union type////////


let oj : object 

oj = {

 namez: 'minhaz',
 address: 'jheniadah',
 number: 1950374409,
 forenTour: false,
 religion: 'islam' 


}

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



///////function of typeScript///////////////////


const Func = ( a: number, b:number, c: number, d:number ) =>{

    
    const allFunc = a * b * c * d 

    const all = allFunc + 90 

    console.log(all)

    if(all > 10){

       console.log('code is true')


    } else {


       console.log('code is not true')

    }

}

Func(20, 50, 60, 70)


////////////////////////////Type Aliases///////////////////////////

type AllValueZ = string | number;


const bangladesh: AllValueZ = 50;

const india: AllValueZ = 'india is a divine city'

const aponAge: AllValueZ = 23;

console.log(bangladesh, india, aponAge)


const FuncZ = ( mangoPrice:AllValueZ, mangoReview:AllValueZ ) =>{

     console.log(mangoPrice, mangoReview)

}

FuncZ(500, 'veryGood')


///////////////////// Function Signatures /////////////////////////

let Add: ( m: number, n: number ) => number;

Add = ( m: number, n: number ) =>{

   const all = m + n 

   return all
 
}

const numZ = Add(20, 40);
console.log(numZ)


