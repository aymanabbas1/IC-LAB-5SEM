while (true) {
    var y=15;
    let z=20; //difference
    const w=10;//if we want assign constant value than go for const keyword.
    break;   
}

   console.log(w);//undefined
  console.log(z);//undefined
 console.log(y);//you will get output here


 /*Function*/
 let received=makeMePass(35);
 function makeMePass(pass) {
     return pass;
   }
 console.log(received);

//welcome('abc');
 let welcome=function (name) {
   console.log( `Hello, ${name}` );//template Literals
 }

 //  arrow();
let arrow=()=>{
    console.log('arrow');
    }
 
    class Human{
        constructor(skill, acomplishTime) {
          this.skill = skill;
          this.acomplishTime = acomplishTime   }
     
        effortMakesIt() {
          console.log(`${this.skill} aquaried in ${this.acomplishTime}`);
        }
      }
   
      const guru = new Human('Developer', '6months');
      const shishya = new Human('Developer', '1.5Years');
     
      guru.effortMakesIt(); 
      shishya.effortMakesIt();


let user = new Object(); 
 let student = {}; 
// /*Object is nothing but collection of key value pairs, Typical object with key value pairs*/
 let employee = {     
    role: "Trainer",  
     age: 25   ,  
     "x developer": true,
     address:{
         city:'Bengaluru',
         region:'South India'
     },
     Trainer: function() {
       console.log('Has worked'+'  '+this.role);
     },
     college:() => {
       console.log('hello undefined/unknown'); // no 'this' binding here
     }};



     let instaLife=intro('abcd',101,1000000);
console.log(instaLife);
function intro(instaId,numberOfPost,numberOfFollowers){
  if (numberOfPost>100&&numberOfFollowers>100000) {
    return 'Getting Renumeration';
  }
return 'Trying to achieve IT'
}



let passObject=student=>{
    return student;
    }
    
    let student={
        marks:35,
        skill:'volleyball district level'
    }
    console.log(passObject)




    let user = new Object(); 
 let student = {}; 
// /*Object is nothing but collection of key value pairs, Typical object with key value pairs*/
 let employee = {     
    role: "Trainer",  
     age: 25   ,  
     "x developer": true,
     address:{
         city:'Bengaluru',
         region:'South India'
     },
     Trainer: function() {
       console.log('Has worked'+'  '+this.role);
     },
     college:() => {
       console.log('hello undefined/unknown'); // no 'this' binding here
     }};




     let location='Udupi'
for(let char of location){
  console.log(char);
}

     employee.Trainer();
     employee.college();
     //Square bracket
     employee["x developer"] = false;

     console.log(employee["x developer"]);




     /*iterating object via for in loop*/
   for (let value in employee){
    console.log(employee[value]);
  }


  /* Arrays can have items that are also arrays.

  /* Rest Operator - ES6
  let returnRecieved = restOperator(1,2,3,4,5,6,7)
  function restOperator(...a){
    console.log(a)
  }

/* spread operator - ES6
let array = [1,2,3,4]
let array2 = [5,4,3]

let array3 = [...array, ...array2]
  console.log(array3);
  array3 = [array,array2];
  console.log(array3); 

  */

/* callback function 
console.log('Hello');
console.log('Hi');

const fetchData = callback =>{
  setTimeout(()=>{
    callback('Done')
  },2000)
}

setTimeout(()=> {
  console.log('Timer is done');
  fetchData(text => {
    console.log(text);
  })
}); */


/* const fetchDataAsync = async () =>  {
  return new Promise((resolve) => {
    serTimeout(() => {
      resolve('Done');
    },2000);
    }); 
  };

  const main = async() => {
    //Wait for 2500 milliseconds (2.5 seconds)
    let a= await new Promise((resolve) => setTimeout(resolve,0));
    console.log(a);
    //Log 'Timer is done' to the console
    console.log('Timer is done');
    //Call fetchDataAsync and wait for the result
    // const r
  }