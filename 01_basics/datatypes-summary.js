// Primitive

// 7 types : String ,number ,Boolean,null,undefined,Symbol ,BigInt
  
// const score=100
// const score=100.3

// const isLogged=false
// const outsideTemp=null
// let userEmail;
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);




// reference (non primitive)

// Array, objects,funtions
//  const heros=["shaktiman","naagraj","doga"];
//  let myObj={
//     name ="abhi",
//    age=18,
//  }
//  const myFuntion=funtion()
//  {
//    console.log("hello world");
   
//  }
//  console.log(typeof bigNumber);




//  +++++++++++++++++++++++++++++++++++++++++++

// stack  (primitive), Heap  (Non-Primitive)

let myYoutubename="abhiyadav.com"
let anothername=myYoutubename
anothername="chaicode"
console.log(myYoutubename);

console.log(anothername)

let userOne={
  email: "user@google.com",
  upi: "user@ybl"
}

let usrTwo=userOne

userTwo.email="abhi55@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



