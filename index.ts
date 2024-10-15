

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



