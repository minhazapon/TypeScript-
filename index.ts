

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


const tea: string = 'chayer dam 500';

const coffe: number = 500;

const sylethIsTeaCountry: boolean = true


console.log(tea, coffe, sylethIsTeaCountry)


//////array of union type////////


let w : (string | number)[] = [ 'apon', 'mernStack', 'fullStack', 50, 'javaScript', 8989,  ]

console.log(w)


let aponSkills: (string | number)[] = ['javaScript', 'typeScript', 'react.js', 'next.js', 'node.js', 'express.js', 'mongodb', 'mongoose']

console.log(aponSkills)



///////object union type////////


let oj : object 

oj = {

 namez: 'minhaz',
 address: 'jheniadah',
 number: 1950374409,
 forenTour: false,
 religion: 'islam' 


}


let ojs : object 


ojs = {

   name: 'minhaz',
   skills: 'softwareEngineering',
   address: 'jheniadah',
   number: 1950374409


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


let tree1: any;
let tree2: any;
let tree3: any;

tree1 = 'bangladesh',
tree2 = 989898,
tree3 = true

console.log(tree1, tree2, tree3)


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


let fuZ = (d: number, f: number) =>{

    const allQ = d + f 

    console.log(allQ)

}

fuZ(20, 50)



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


type valueZ = string | number 

const FNC = (vv: valueZ, bb: valueZ) =>{

    console.log(vv, bb)

}

FNC(80, 90)


///////////////////// Function Signatures /////////////////////////

let Add: ( m: number, n: number ) => number;

Add = ( m: number, n: number ) =>{

   const all = m + n 

   return all
 
}

const numZ = Add(20, 40);
console.log(numZ)


let Fs: ( z: number, x: number ) => number;

Fs = (  z: number, x: number ) =>{

     const allX = z + x

     return allX

}

const xx = Fs(1000, 4000 )

console.log(xx)


////////////  interface of typeScript  //////////////////


interface inValueZ  { 
    apple: number,
    mango: number
} 
let allFrutZ = {
     apple: 34,
     mango: 50
}
console.log(allFrutZ.apple)
console.log(allFrutZ.mango)


interface FaceValueZ {

    shemanto: string,
    apon: string

}

const allFaces = {
    
    shemanto: 'they are frnz',
    apon: 'they are frndZ'

}


console.log(allFaces.shemanto)
console.log(allFaces.apon)



/////////////////Generics - TypeScript //////////////////////

interface GTypes<T> {
    apon: string,
    address: string,
    data: T
}
const Gall: GTypes<object> = {
    apon: 'fullName: minhazul abedin apon',
    address: 'jhenaidah',
    data: {        
      name: 'apon',
      profession: 'software engineer'
    }
}
console.log(Gall.apon)
console.log(Gall.address)
console.log(Gall.data)


interface GeTypes<T> {

   mac: number,
   windows: number,
   linux: T

}

const GeR: GeTypes<object> = {

   mac: 1500000,
   windows: 2000,
   linux:{

      manzero: 'good',
      kalin: 'good',
      fedro: 'very Good'

   }

}

// console.log(GeR.linux.manzero)


//////////////Enum Types of typeScript///////////////////////////


enum Rtype { SUCCESS, failure, number,  forbid }


interface OO {
   name: string,
   nuZ: number
}
 
const allO = {
  
   name: 'apon'
   // nuZ: Rtype.SUCCESS


}


///////////////////tuples of typeScript/////////////////


let arr: [number, string, object] = [ 1000, 'minhazTheFullStack', { w: 20 } ]

console.log(arr)


let arr1: [number, string, object] = [ 20000, 'aponTheSoftware Engineer', { K: 10000 } ]


console.log(arr1)



