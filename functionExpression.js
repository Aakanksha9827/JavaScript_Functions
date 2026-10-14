// function expreesion example
//1
const greet=function(){
    console.log("hello");
};
greet();

//2
const welcome=function(){
  console.log("Welcome JS");  
}
welcome();

//3
const subtract=function(a,b){
    return a-b;
};
console.log(subtract(30,10));

//4
const multiply=function(a,b){
    return a*b;
};
console.log(multiply(10,6));

//5
const divide=function(a,b){
    return a/b;
};
console.log(divide(10,2));

//6
const square=function(num){
return num*num;
};
console.log(square(5));

//7
const evenOdd=function(num){
if(num%2==0){
    return true;
}
else{
    return false;
}
}
console.log(evenOdd(7));

//8
const cube=function(num){
return num*num*num;
}
console.log(cube(3));

//9
const checkAge=function(age){
if(age>=18){
    return true;
}
else{
    return false;
}
};
console.log(checkAge(8));

//10
const add=function(a,b){
    return a+b;
};
console.log(add(10,20));

