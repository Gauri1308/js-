// heap and stack 
//    |         |
// primitive    non primitive

// this will not change referenced value 
let name="gauri";
let sername=name;
sername="Verma";
console.log(sername);
console.log(name);

//this will change email for both 
let myobj={
    email:"gauri@gmail.com",
}
  let myobj2=myobj;
  myobj2.email="hi@gmail.com";

// myobj.email="hi@gmail.com";
console.log(myobj.email);
console.log(myobj2.email);




