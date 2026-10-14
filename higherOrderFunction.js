//higher order function ex
// calculate is HOF and add function is passed
//1
function calculate(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}
console.log(calculate(10,20,add));

//2
function calculate(a,b,operation){
    return operation(a,b);
}
function multiplication(a,b){
  return a*b;
}
console.log(calculate(5,5,multiplication));

//3
function calculate(a,b,operation){
return operation;
}
function substraction(a,b){
return a-b;
}
console.log(calculate(50,10,substraction));

//4
function execute(callback){
    callback();
}
function greet(){
    console.log("hello aaki");
}
execute(greet);

//5 passing a function
function showMessage(messageFunction){
messageFunction();
}
function message(){
    console.log("welcome to js");
}
showMessage(message);

//6
function outer(){
    return function(){
        console.log("hello");
    };
}
let result=outer();
result();

//callback function
let runOnEach=(arr,printer)=>{
for(let i=0;i<arr.length;i++){
    printer(arr[i]);
}
}
runOnEach([10,20,30,40],(arg)=>{
    console.log(arg);
})

//
let greetUser=(name,cb)=>{
cb(name);
}
let func=(name)=>{console.log(`hello ${name}`)}
greetUser("prasad",func)
greetUser("aki",func)

//
let repeatTwice=(cb,n)=>{
    for(let i=0;i<n;i++){
        cb()
    }
}
repeatTwice(()=>{console.log("called")},30)