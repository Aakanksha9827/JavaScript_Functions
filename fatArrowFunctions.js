// fat arrow function
//1
const greet=()=>{
console.log("Hello");
};
greet();

//2
const welcome=()=>{
console.log("Welcome Javascript");
};
welcome();

//3
const add=(a,b)=>{
console.log(a+b);
};
add(10,30);

//4
const showName=(name)=>{
console.log(name);
};
showName("Aakanksha");

//5
const square=(num)=>{
console.log(num*num);
};
square(10);


//6
const evenOdd=(num)=>{
  if(num%2==0){
    console.log("even number");
  }
  else{
    console.log("odd number");
  } 
};
evenOdd(56);

//7
const checkAge=(age)=>{
if(age>=18){
    console.log("eligible");
}
else{
    console.log("not eligible");
}
};
checkAge(23);

//8
const multiplication=(a,b)=>{
console.log(a*b);
};
multiplication(89,67);

//9

const subtract=(a,b)=>{
console.log(a-b);
};
subtract(90,76);

//10
const cube=num=>num*num*num;
console.log(cube(4));
