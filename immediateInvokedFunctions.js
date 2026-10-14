//immediate invoked function
//1
(function(){
console.log("hello");
})();

//2
(function(){
console.log("welcome ap");

})();

//3
(function(){
let a=10;
let b=20;
console.log(a+b);
})();

//4
(function(){
    console.log("js");
})();

//5 parameters
(function(name){
console.log("hello"+name)
})("Aakanksha");

//6
(function(a,b){
console.log(a*b);
})(5,4);

//7
(function(a,b){
console.log(a-b);
})(20,10);

//8
(function(){
let name="Aakanksha";
console.log(name);
})();

//9
(function(message){
console.log(message);
})("gm");

//10
(()=>{console.log("hello")})();