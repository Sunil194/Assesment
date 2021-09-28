// let x = 10;
// let y=true;
// let myObject={
//     a: x,
//     b: y
// }
// console.log(myObject);

// let anotherObject;
// x=20;
// anotherObject={
//     newA: x,
//     b: y,
//     c: myObject
// }
// console.log(anotherObject);

// let myPost= {};
// myPost.postTitle = "Object is reference type",
// myPost.postLikes= 0,
// myPost.shared =false
// console.log(myPost);

// myPost.postLikes= myPost.postLikes+1;
// console.log(myPost);
// delete myPost["shared"];

// console.log(myPost);

// const myObject = {};
// myObject.a=true;
// console.log(myObject);

// const hi = "country";
// myObject[hi]= "usa";
// console.log(myObject); 

// let myObject={};

// myObject.a =10;

// let copyOfMyObject = myObject;

// copyOfMyObject.b=false;

// console.log(myObject);
// console.log(copyOfMyObject);


// let myObject ={
//     a:10,
//     b:true
// }

// console.log(myObject["a"]);

// const change= "b";
// console.log(myObject[change]);


// let objectWithNestedObject = {};
//    objectWithNestedObject.nestedObject={};
        
    


// nestedObject= {};

// objectWithNestedObject.nestedObject.a = null;

// const hi = "b";

// objectWithNestedObject.nestedObject[hi] = true;

// console.log(objectWithNestedObject);

// function myFunction() {}

// console.log(myFunction);
// myFunction();

// const fnres = myFunction();
// console.log(myFunction(10,true));

// function myFunction(a,b) {
//     console.log(a);
//     console.log(b);

// }
// myFunction(10,5);

// myFunction(true,5);

// myFunction("abc"); 


// console.log(myFunction(4,3));

// function myFunction(a,b) {
//     console.log(a,b);
// }
// console.log(myFunction( 3,2)); //undefined
// console.log(a); //error script.js:103 Uncaught ReferenceError: a is not defined

// function myFunction(a,b) {
//     console.log(a,b);
// }

// function myFunction1(a,b) {
//     console.log(a,b);
// }
// const a= true;
// const b = false;


// console.log(3,5);
// console.log(21,53);
// console.log(a,b);

// function sum(a,b) {
//     return a+b;
// }
// sum(2,3);

// console.log(sum(2,3));
// console.log(sum(a,b));

// function mult(a,b,c) {
//     let r;
//     r=a*b*c;
//     console.log(r);

// }

// mult(2,3,4);

// function con(a,b) {
    
//     return a+" " +b;
// }

// const str = con("hello","world");

// console.log(str);

// function outerFn(a,b) {
//     function innerFn(c) {
//         return c*c;
//     }
//     const d = a+b;
//     const e=innerFn(d);
//     console.log(e);
// }

// outerFn(4,2);
// let i=1;

// const myInterval =setInterval(function() {
//     console.log("hi" +i);
//     i= i + 1;

// },2000);

// setTimeout(function() {
//     clearInterval(myInterval)
// },10000);

// c= 1;
// c++;
// console.log(c);

// let a,b;

// a=5;
// b="3";
// console.log(a % b);

// const a=[1,2,3];
// a.shift();
// console.log(a);


// let arr = [true,null];

// arr.unshift("hello");
// arr.unshift(100);



// console.log(arr);

// const arr= [1,2];

// arr[10]="abc";

// console.log(arr);

// const arr= [
//     {
//     cb: "toyota",
//     p: 50
//     },
//     {
//         cb: "tesla",
//         p: 50
//         },
//         {
//             cb: "bmw",
//             p: 50
//             }

// ];
// const a= {
//     cb: "btw",
//     p: 500
// }
// arr.push(a);

// console.log(arr);

// for(let i=0;i<4;i++){
//     console.log(i);
// }



// const obj={
//     key1:10,
//     key2:true,
//     key3:"abc"
// };

// for(let key in obj){
//     if(key=== "key1" || key === "key3"){
//         console.log(obj[key])
//     }
// }

// const MIN=1000;
// const MAX=9999;

// const myNumber= [
//     2344,
//     3243,
//     2132,
//     9484,
//     8373

// ]

// let randomNumber;

// function random(min, max) {
//     // min= Math.ceil(min); no use 
//     // max= Math.floor(max); no use

//     return Math.floor(Math.random() * (max-min+1)) +min;
// }

// function isNotUnique(newNum){
//     for (const number of myNumber) {
//         if( number === randomNumber)
//         return true;
//     }

// }

// do {
//     randomNumber= random(MIN, MAX) ;

// }while (isNotUnique(randomNumber));

// myNumber.push(randomNumber);
// console.log(myNumber);

// const myObject={
//     name:"Mike",
//     age:30
// };

// Object.prototype.country = "India";

// for(const key in myObject){
//     console.log(myObject[key]);
// }


// for(const key in myObject){
//     if(myObject.hasOwnProperty(key)){
//         console.log(myObject[key]);

//     }
// }

// function emptyArray(inputArray){
//     return inputArray.length>0 ? "a" : "b" ;

// }
// console.log(emptyArray([1,2]));
// console.log(emptyArray([]));

// const obj= {
//     a:10,
//     b:true
// };

// function myFunction(a,b){
//     console.log(a+b);
    
//     console.log(this);
// }

// // myFunction.call(obj);
// myFunction.call(obj,10,3);


// Jquery starts now..........................................................................................................................

// selectors

// $("document").ready(function(){

//     // $("h1").css("border", "2px solid blue");  
//     $("h1:first").css("border", "2px solid green");
    
//     $("#heading3").css("border", "2px solid blue")



// });


//replacing content

// $("document").ready(function(){

//     var newPara = $("<p>");
//     newPara.append("<i>Hello</i>");

//     $("#box").html(newPara);



// });


// Eventsssss


// $("document").ready(function(){

// $("#box").on("click", mouseClick); // on is for looking out for this page
// $("#box").on("mouseleave", mouseNotClick);
// function mouseClick() {
//     $("#box").html("<h4> hey you touched me </h4>");

// }

// function mouseNotClick() {
//     $("#box").html("<h4> hey you didnt touched me </h4>");

// }


// });


// show and hide elementsssss



// $("document").ready(function(){

//     $("#show").on("click", function(){
//         $("#box").show();
//     });

//     $("#hide").on("click", function(){
//         $("#box").hide();
//     });
    
    
//     });

//fading

// $("document").ready(function(){

//     $("#show").on("click", function(){
//         $("#box").fadeIn(4000, function(){
//             alert("i am done");
//         });
//     });

//     $("#hide").on("click", function(){
//         $("#box").fadeOut("fast", function(){
//             alert("net");
//         });
//     });
    
    
//     });

    //hover


    // $("document").ready(function(){

    //     $(".para").hover(highlightPara);

    //     function highlightPara() {
    //         $(this).toggleClass("highlight");
    //     }
            
    //      });



        

















