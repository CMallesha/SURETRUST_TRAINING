// let a=5;//-->false when undefined, true when defined
// // let b=2;
// // let c;
// // // console.log(a++)
// // console.log(a)

// // console.log(--b)
// // console.log(b)
// //if we add ++/-- as prefix , it will change the value immedieatly
// // if we add ++/-- as suffix , it will change the value on next execution(same for --)
// //
// // console.log(a+1)//a+1==a++("++" incress the value of a variable by 1,
// // "--" decress the value of a variable by 1)
// // console.log(a**b)
// // console.log(a%b)
// // console.log(a-=1)
// // console.log(a*=b)/(a*b)
// // if a variable is assigned with some value, we can consider , that is true
// // console.log(a &&= 4564564)// "&&" AND --> if first value is true, then given value is assigned
// // a=0;
// // console.log(a ||= 5)//"||" OR --> if the first value is false , then given value is assigned
// // a=88
// // console.log(a ||= 5)//a is true this time 
// // a=0;
// // console.log(c ??=5)//"??" nullish assignment operator -->
// // if first value is undefined or null , then given value is assigned

// let a=50;//-->false when undefined, true when defined
// let b=200;
// let c=200;

// // if(a>b){//if(a>b) this part return true or false value, if it returns true,then only next line will execute
// //     console.log("a is bigger")
// // }else{//it will execute , when (a>b) returns false
// //     console.log("b is bigger")
// // }

// // if(a>b && a>c){// if any of these two operand returns true "if(a>b && a>c)"
// // // this part will return true or vice versa
// //     console.log("a is geatest")
// // }else if(b>a && b>c){
// //     console.log("b is greatest ")
// // }else if(1>0){
// //         console.log("just kidding")
// // }
// // else{
// //     console.log("c is greatest")
// // }
// //nested if else 
// //ternary operator is a short cut of 1 if else 

// let d;
// // if(a>b){//if(a>b) this part return true or false value, if it returns true,then only next line will execute
// //     d=a;
// //     console.log("a is bigger",d)
// // }else{//it will execute , when (a>b) returns false
// // d=b
// //     console.log("b is bigger",d)
// // }
// //    true -> execute 1st one
// //   false -> execute 2nd one
// // d = (a>b) ? d=a : d=b;
// // console.log(d's value is,d)


// //**loop**
// // for 
// // while
// // do while
// a = 10;
// //     initialization  |condition checking|   increment/decrement
// for(       i=1      ;        i<=a        ;         i++){
//     console.log(i)
// }