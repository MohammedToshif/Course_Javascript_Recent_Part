            //----- 01 - ( Strings - Templet String )


// var name = "Kyle Simpson";
// var email = "getify@gmail.com";
// var title = "Teacher";

// var msg = "Welcome to this class! Your " + title + " is " + name +
//             ", contact: " + email + ".";

// // Welcome to this class! Your Teacher is
// // Kyle Simpson, contact: getify@gmail.com.            


            // ( 02 )


// var name = "Kyle Simpson";
// var email = "getify@gmail.com";
// var title = "Teacher";            

// var msg = `Welcome to this class! Your
// ${title} is ${name}, contact: ${email}.`

// // Welcome to this class! Your 
// // Teacher is Kyle Simpson, contact: getify@gmail.com.
 


            //----- 02 - ( Strings - Tagged Templets )

          
// var amount = 12.3;

// var msg =
//             formatCurrency
//             `The total for your order is ${amount}`;

//             // The total for your
//             // order is $12.30


            // ( 02 )


// function formatCurrency(strings,...values) {
//     var str = "";
//     for (let i = 0; i < strings.length; i++) {
//         if (i > 0) {
//             if (typeof values[i-1] == "number") {
//                 str += `$${values[i-1].toFixed(2)}`;
//             }
//             else {
//                 str += values[i-1];
//             }
//         }
//         str += strings[i]
//     }
//     return str;
// }            


            //----- 03 - ( Strings - Applying Tagged Templets )


// function logger(strings,...values) {
//     var str = "";
//     for (let i = 0; i < strings.length; i++) {
//         if (i > 0) {
//             if (values[i-1] && typeof values[i-1] == "object") {
//                 if (values[i-1] instanceof Error) {
//                     if (values[i-1].stack) {
//                         str += values[i-1].stack;
//                         continue;
//                     }
//                 }
//                 else {
//                     try {
//                         str += JSON.stringify(values[i-1]);
//                         continue;
//                     }
//                     catch (err) {}
//                 }
//             }
//             str += values[i-1];
//         }
//         str += strings[i];
//     }
//     console.log(str);
//     return str;
// }            


            // ( 02 )


// var v = 42;
// var o = { a: 1, b: [2,3,4] };

// logger`This is my values: ${v} and another: ${0}`;
// // This is my values: 42 and another: {"a":1, "b":[2,3,4]}


// try {
//     nothing();
// }
// catch (err) {
//     logger`Caught: ${err}`;
// }

// // Caught: ReferenceError: nothing is not defined
// // at <anonymous>:2:3


            //----- 04 - ( Strings - Tagged Templets Exercise )


// function upper(strings,...values) {}

// var name = "Kyle",
//     twitter = "getify",
//     topic = "JS Recent Parts";
    
// console.log(
//     `Hello ___ (@____), welcome to ____!` ===
//     "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
// );    


            //----- 05 - ( Strings - Tagged Templets Solutions )


// function upper(strings,...values) {
//     var ret = "";
//     for (let i = 0; i < strings.length; i++) {
//         if (i > 0) {
//             ret += strings(values[i-1]).toUpperCase();
//         }
//         ret += strings[i];
//     }
//     return "";
// }

// var name = "Kyle",
//     twitter = "getify",
//     topic = "JS Recent Parts";
                    
// console.log(
//     upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
//     "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
// );             



            //----- 06 - ( Strings - Padding & Trimming )

            // ( 01 ) ( padStart )

// var str = "Hello";

// str.padStart( 5 );              // "Hello"

// str.padStart( 8 );              // "   Hello"

// str.padStart( 8, "*" );         // "***"Hello"

// str.padStart( 8, "12345" );     // "123Hello"

// str.padStart( 8, "ab" );        // "abaHello"


//             // ( 02 ) ( padEnd )

// var str = "Hello";

// str.padEnd( 5 );              // "Hello"

// str.padEnd( 8 );              // "Hello   "

// str.padEnd( 8, "*" );         // "Hello***"

// str.padEnd( 8, "12345" );     // "Hello123"

// str.padEnd( 8, "ab" );        // "Helloaba"      


//             // ( 03 ) ( trimming )

// var str = "   some stuff  \t\t";

// str.trim();             // "some stuff"

// str.trimStart();        // "some stuff       "

// str.trimEnd();          // "     some stuff"



            //----- 07 - ( Array Destrucuring - Destructuring )


// var tmp = getSomeRecords();

// var first = tmp[0];
// var second = tmp[1];

// var firstName = first.name;
// var firstEmail = first.email !== undefined ?
//             first.email :
//             "nobody@none.tld";

// var secondName = second.name;
// var secondEmail = second.email !== undefined ?
//     second.email :
//     "nobody@none.tld";            



            // ( 02 )


// var [
//     {
//         name: firstName,
//         email: firstEmail = "nobody@none.tld"
//     },
//     {
//         name: secondName,
//         email: secondEmail = "nobody@none.tld"
//     }
// ] = getSomeRecords();            


            //----- 08 - ( Array Destrucuring - Refactoring Code Using Destructuring )

            // ( normal way )

// function data() {
//     return [1,2,3,4,5];
// }            

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3);

//             // ( Desructring way )

// function data() {
//     return [1,2,3,4,5];
// }            

// var [
//     first,
//     second,
//     third,      
// ] = data();


            //----- 09 - ( Array Destrucuring - Spread Operator & Declaring Destructured Arrays )


// function data() {
//     return [1,2,3];
// }            

// var [
//     first,
//     second,
//     third, 
//     ...fourth     
// ] = tmp = data();


            //----- 10 - ( Array Destrucuring - Declaration & Assignment )

                // (1)
// function data() {
//     return[1,2,3];
// }

// var tmp = data();
// var o [];

// o[3] = tmp[0];
// o[10] = tmp[1];
// o[42] = tmp[2];
// o[100] = tmp.slice(3);

//                 // (2)
// function data() {
//     return [1,2,3];
// }

// var tmp;
// var o = [];
// [
   
//     o[42],
//     ...o[100]
// ] = data();


            //----- 11 - ( Array Destrucuring - Comma Sepration )

                    // (1)
// function data() {
//     return[1,2,3];
// }

// var tmp = data();

// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3);            

//                     // (2)
// function data() {
//     return [1,2,3];
// }
// var tmp;
// var [
//     first,
//     ,
//     second,
//     third,
//     ...fourth
// ] = tmp = data();

//                     // (3)
// var x = 10;
// var y = 20;
// {
//     let tmp = x;
//     x = y;
//     y = tmp;
// }                

//                     // (4)
// var x = 10;
// var y = 20;
// [y,x] = [x,y];                  


            //----- 12 - ( Array Destrucuring - Parameter Arrays )

                      // (1)
// function data(tmp = []) {
//     var [
//         first = 10,
//         second = 20,
//         third = 30
//     ] = tmp;
// }

//                      // (2)
// function data([
//     first = 10,
//     second = 20,
//     third = 30
// ] = []) {
//     // ..
// }                     
                
            //----- 13 - ( Array Destrucuring - Nested Array Destructuring )

                        // (1)
// function data() {
//     return [1,[2,3],4];
// }            

// var tmp = data() || [];

// var first = tmp[0];
// var tmp2 = tmp[1];
// var second = tmp[0];
// var third = tmp[1];
// var fourth = tmp[2];

//                         // (2)
// function data() {
//     return [1,2,3];
// }                  

// var tmp;
// var [
//     first,
//     [
//         second,
//         third
//     ],
//     fourth
// ] = tmp = data() || [];
                


            //----- 14 - ( Object Destrucuring  )

                        // (1)
// function data() {
//     return { b: 2, c: 3, d: 4 };
// }                        

// var tmp = data();
// var first = tmp.a !== undefined ? tmp.a : 42;
// var second tmp.b;

//                         // (2)
                       
// function data() {
//     return { b: 2, c: 3, d: 4 };
// } 

// var {
//     b: second,
//     a: first = 42,
//     ...third
// } = data();


            //----- 15 - ( Object Destrucuring - Object Assignment Dest.)

                            // (1)
// function data() {
//     return { b: 2, c: 3, d: 4 };
// } 

// var tmp = data();
// var first, second;

// first = tmp.a;
// second = tmp.b;

//                             // (2)

// function data() {
//     return { b: 2, c: 3, d: 4 };
// }

// var tmp;
// var first, second;

// tmp = {
//     b: second,
//     a: first
// } = data();


            //----- 16 - ( Object Destrucuring - Object Default Assign.)

                                // (1)
// function data() {
//     return;
// }          

// var tmp = data() || {};
// var a = tmp.a;
// var b = tmp.b;

//                                 // (2)
// function data() {
//     return;
// }          

// var {
//     a = 42,
//     b
// } = data() || {};


            //----- 17 - ( Object Destrucuring - Nested Object Dest.)

                                // (1)

// function data() {
//     return {
//         a: 1,
//     };
// } 

// var tmp = data() || {};
// var a = tmp.a;
// var b = tmp.b || {};
// var c = b.c;
// var d = b.d;

//                              // (2)

// function data() {
//     return {
//         a: 1,
//         b: {
//             c: 3,
//             d: 4
//         }
//     };
// }       

// var {
//     a,
//     b: {
//         c,
//         d
//     } = {}
// } = data() || {};


            //----- 18 - ( Object Destrucuring - Defalt Assg. Q&A)

                                // (1)

// var o1 = {
//     a: {
//         c: 3
//     }
// };

// var o2 = {
//     a: {},
// };

// var o3 = {};

//                                 // (2)

// var {
//     a: {
//         b = 10,
//         c = 20
//     } = {}
// } = o3;                       


            //----- 19 - ( Object Destrucuring - Parameter Objects )

                                  // (1)

// function data(tmp = {}) {
//     var {
//         a,
//         b
//     } = tmp;
// }             

//                                  // (2)

// function data({
//     a,
//     b,
//     x
// } = {}) {
//     // ..
// }        

// data({ a: 1, b: 2, x: 42}, 42)


            //----- 20 - ( Object Destrucuring - Nested Obj. & Array Dest.)

                                    // (1 - object)
// var obj = {
//     a: 1,
//     b: {
//         x: 2
//     },
//     c: 3
// };

// var {
//     a,
//     b,
//     b: {
//         x: W
//     }
//     c
// } = obj;

//                                     // (2 - Array)

// var obj = {
//     a: 1,
//     b: [500,5000],
//     c: 3
// };

// var {
//     a,
//     b,
//     b: [
//         w,
//         y
//     ] = [],
//     c 
// } = obj;


            //----- 21 - ( Further Destructuring - Named Argument )


// function lookupRecord(store = "person-records", id - -1) {
//     //...
// }        

// function lookupRecord({
//     store = "person-records",
//     id = -1
// }) {
//     //...
// }

// lookupRecord( {id: 42} );


            //----- 22 - ( Further Destructuring - Destru. & Restru. )
                        
                            // (1)

// var defaults = {
//     url: "http://some.base.url/api",
//     method: "post",
//     headers: [
//         "content-Type: text/plain"
//     ]
// };

// console.log(defaults);

// // ********************

// var settings = {
//     url: "http://some.other.url/",
//     data: 42,
//     callback: function(resp) { /* .. */}
// };

// // underscore extends(..)
// ajax( _.extend({},defaults,settings) );

// // or: ajax( Object.assign({}, defaults,settings) );

                            // (2)

// function ajaxOptions({
//     url = "http://some.base.url/api",
//     method = "post",
//     data,
//     callback,
//     headers: [
//         headers0 = "Content-Type: text/plain",
//         ...otherHeaders
//     ] = []
// } = {}) {
//     return {
//         url, method, data, callback,
//         headers: [
//             headers0,
//             ...otherHeaders
//         ]
//     };
// }          

                            // (3)

// // with no arguments, returns the defaults
// // as an object if necessary

// var defaults = ajaxOptions();

// console.log(defaults);

// //*************** */

// var settings = {
//     url: "http://some.other.url/",
//     data: 42,
//     callback: function(resp) { /* .. */ }
// };

// // with an argument, mixes in the settings
// // w/ the defaults
// ajax( ajaxOptions( settings ) );


            //----- 23 - ( Further Destructuring - Destructuring Exercise )

// var defaults = {
//     topic: "JavaScript",
//     format: "Live",
//     slides: {
//         start: 0,
//         end: 100
//     }
// };

// fakeAjax("http://get-the-workshop.tld", handleResponse);

// //************************************************** */

// function handleResponse( /* destructuring here */ ) {
    
//     TestCase({
//         /* restructuring here */
//     });
// }

// function TestCase(data) {
//     console.log(
//         data.topic == "JS Recent Parts" &&
//         data.format == "Live" &&
//         data.slides.start === 0 &&
//         data.slides.end == 77
//     );
// }

// // *****************************************


            //----- 24 - ( Further Destructuring - Destructuring Solutions )

// var defaults = {
//     topic: "JavaScript",
//     format: "Live",
//     slides: {
//         start: 0,
//         end: 100
//     }
// };

// fakeAjax("http://get-the-workshop.tld", handleResponse);

// //************************************************** */

// function handleResponse( {
//     topic = "JavaScript",
//     format = "Live",
//     slides: {
//         start = 0,
//         end: 100
//     },
//     ...otherProps
// } = {} ) {
    
//     TestCase({
//         topic, format,
//         slides: {
//             start, end
//         },
//         ...otherProps
//     });
// }

// function TestCase(data) {
//     console.log(
//         data.topic == "JS Recent Parts" &&
//         data.format == "Live" &&
//         data.slides.start === 0 &&
//         data.slides.end == 77
//     );
// }

// *****************************************            


            //----- 25 - ( Array Methods - find,findIndex, & includes )

                        // (1)

// var arr = [ { a:1 }, { a:2 } ];

// arr.find(function match(v) {
//     return v && v.a > 1;
// });
// //  { a: 2 }

// arr.find(function match (v) {
//     return v && v.a > 10;
// });
// // undefined

// arr.findIndex(function match (v) {
//     return v && v.a > 10;
// });
// //  -1

                        // (2)

// var arr = [10,20,NaN,30,40,50];

// arr.indexOf( 30 ) != -1;          // true

// ~arr.indexOf( 20 );               // -2 (truthy)

// ~arr.indexOf( NaN );              // -0 (falsy)


                        // (3)

// var arr = [10,20,NaN,30,40,50];

// arr.includes( 20 );             // true

// arr.includes( 60 );             // false

// arr.includes( 20, 3 );          // false

// arr.includes( 10, -2 );          // false

// arr.includes( 40, -2 );          // true

// arr.includes( NaN );          // true


            //----- 26 - ( Array Methods - flat & flatMap )

// var nestedValues = [ 1, [2, 3], [[]], [4, [5]], 6 ];

// nestedValues.flat(0);
// // [ 1, [2, 3], [[]], [4, [5]], 6 ]

// nestedValues.flat(/*default: 1*/);
// // [ 1, [2, 3], [], 4, [ 5 ], 6 ]

// nestedValues.flat(2);
// // [ 1, 2, 3, 4, 5, 6 ]

                            // (2)

// [1,2,3].map(function tuples(v) {
//     return [ v * 2, String(v * 2) ];
// });
// // [ [2, "2"], [4, "4"], [6, "6"] ]

// [1,2,3].map(function tuples(v) {
//     return [ v * 2, String(v * 2) ];
// }).flat();
// // [ 2, "2", 4, "4", 6, "6" ]

// [1,2,3].flatMap(function all(v) {
//     return [ v * 2, String(v * 2) ];
// });
// // [ 2, "2", 4, "4", 6, "6" ]

                            // (3)

// [1,2,3,4,5,6].flatMap(function doubleEvents(v){
//     if (v % 2 == 0) {
//         return [v,v * 2];
//     }
//     else {
//         return [];
//     }
// });
// // [ 2, 4, 4, 8, 6, 12 ]                        


            //----- 27 - ( Iterators & Generators - Iterators )

// var str = "Hello";
// var world = ["W","o","r","l","d"];

// var it1 = str[Symbol.iterator]();
// var it2 = world[Symbol.iterator]();

// it1.next();     // { value: "H", done: false }
// it1.next();     // { value: "e", done: false }
// it1.next();     // { value: "l", done: false }
// it1.next();     // { value: "l", done: false }
// it1.next();     // { value: "o", done: false }
// it1.next();     // { value: undefined, done: true }

// it2.next();     // { value: "W", done: false }
// // ..


            //----- 28 - ( Iterators & Genrators - Declarative Iterators )

// var str = "Hello";

// for (
//     let it = str[Symbol.iterator](), v, result;
//     (result = it.next()) && !result.done &&
//         (v = result.value || true);
// ) {
//     console.log(v);
// }
// //  "H" "e" "l" "l" "o"

                            // (2)

// var str = "Hello";
// var it = str[Symbol.iterator]();

// for (let v of it) {
//     console.log(v);
// }
// //  "H" "e" "l" "l" "o"

// for (let v of str) {
//     console.log(v);
// };
// //  "H" "e" "l" "l" "o"

                            // (3)

// var str = "Hello";

// var letters = [...str];
// letters;
// //  "H" "e" "l" "l" "o"


            //----- 29 - ( Iterators & Genretors - Data Structure withouth Iterators )

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// for (let v of obj) {
//     console.log(v);
// }
// //  TypeError!  (bcoz - object not iterables)

                                // (2)

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function() {
//         var keys = Object.keys(this);
//         var index = 0;
//         return {
//             next: () =>
//                 (index < keys.length) ?
//                     { done: false, values: this[keys[index++]] } :
//                     { done: true, value: undefined }
//         };
//     }
// };

// [...obj];

// [1,2,3]

// NOTE - ( iterators: ierative iterator )


            //----- 30 - ( Iterators & Generators - Generators )

// function *main() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }            

// var it = main();

// it.next();          // { value: 1, done: false }
// it.next();          // { value: 2, done: false }
// it.next();          // { value: 3, done: false }
// it.next();          // { value: 4, done: true }

// [...main()];
// // [1,2,3]

                        // (2)

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     *[Symbol.iterator]() {
//         for (let key of Object.keys(this)) {
//             yield this[key];
//         }
//     }
// };

// [...obj];
// // [1,2,3]

// // NOTE - declarative iterator


            //----- 31 - ( Iterators & Generators Exercise )

// var numbers = {
//     //...
// };

// // should print 0..100 by 1s
// for (let num of numbers) {
//     console.log(num);
// }

// // should print 6..30 by 4s
// console.log("My lucky numbers are: ____");

// // Hint:
// //  [...numbers[Symbol.iterator]( ?? )]


            //----- 32 - ( Iterators & Generators Solutions )

                            // (1)

// var numbers = {
//     *[Symbol.iterator]() {
//         for (let i = 0; i <= 100; i++) {
//             yield i;
//         }
//     }
// };

// // should print 0..100 by 1s
// for (let num of numbers) {
//     console.log(num);
// }

// // should print 6..30 by 4s
// console.log("My lucky numbers are: ____");

// // Hint:
// //  [...numbers[Symbol.iterator]( ?? )]    

//                             // (2)

// var numbers = {
//     *[Symbol.iterator]({
//         start = 0,
//         end = 100,
//         step = 1
//     } = {}) {
//         for (let i = start; i <= end; += step) {
//             yield i;
//         }
//     }
// };

// // should print 0..100 by 1s
// for (let num of numbers) {
//     console.log(num);
// }

// // should print 6..30 by 4s
// console.log(`My lucky numbers are: {
//     [...numbers[Symbol.iterator]({
//         start: 6,
//         end: 30,
//         step: 4
//     })]
// }`);

// // Hint:
// //  [...numbers[Symbol.iterator]( ?? )]            


            //----- 33 - ( Regular Expression - Look Ahead & Behind )

// var msg = "Hello World";

// msg.match(/(l.)/g);
// // ["l","ld"]

// msg.match(/(l.)$/g);
// // ["ld"]

// msg.match(/(l.)(?=0)/g);
// // ["ll"]

// msg.match(/(l.)(?!o)/g);
// // ["l","ld"]

                            // (2)

// var msg = "Hello World";

// msg.match(/(?<=e)(l.)/g);
// // ["ll"]

// msg.match(/(?<!e)(l.)/g);
// // ["lo","ld"]


            //----- 34 - ( Regular Expression - Named Capture Groups )

// var msg = "Hello World"            ;

// msg.match(/.(l.)/);
// // ["ell","ll"]

// msg.match(/([jkl])o Wor\1/);
// // ["lo Worl","l"]

// msg.match(/(?<cap>l.)/).groups;
// // {cap: "ll"}

// msg.match(/(?<cap>[jkl])o Wor\k<cap>/);
// // ["lo Worl","l"]

// msg.replace(/(?<cap>l.)/g,"-$<cap>-");
// // "He-ll-o Wor-ld-""

// msg.replace(/(?<cap>l.)/g,function re(...args) {
//     var [,,,,{ cap }] = args;
//     return cap.toUpperCase();
// });
// // "HeLLo WorLD"


            //----- 35 - ( Regular Expression - dotall Mode )

// var msg = `
// The quick brown fox jumps over the lazy dog`;

// msg.match(/brown.*over/);
// // null

// msg.match(/brown.*over/s);
// // ["brown fox\njumps over"]


            //----- 36 - ( Regular Expression - Regex Exercise )

// // The Power of a smile
// // by Tupac Shakur

// var poem = `
// The power of a gun can kill
// and the power of fire can burn
// the power of wind can chill
// and the power of a mind can learn
// the power of anger can rage
// inside until it tears u apart
// but the power of a smile
// especially yours can heal a frozen hearts`;

// for (let power of powers(poem)) {
//     console.log(power);
// }

// // a gun: kill
// // fire: burn
// // wind: chill
// // a mind: learn
// // anger: rage
// // smile: heal

// // Hints: 

// // function *power(poem) { .. } 

// // re = / .. /gs

// // while (match = re.exec(poem)) { .. }


            //----- 37 - ( Regular Expression - Regex Solutions )

// function *power(poem) { 
//     var re = /(?<=power of )(?<thing>(?:a )?\w+).*?(?<=can )(?<verb>\w+)/gs;
//     var match;
//     while (match = re.exec(poem)) {
//         let {
//             groups: {
//                 thing,
//                 verb
//             }
//         } = match;
//         yield `${thing}: ${verb}`;
//     }
//  } 


// // The Power of a smile
// // by Tupac Shakur

// var poem = `
// The power of a gun can kill
// and the power of fire can burn
// the power of wind can chill
// and the power of a mind can learn
// the power of anger can rage
// inside until it tears u apart
// but the power of a smile
// especially yours can heal a frozen hearts`;

// for (let power of powers(poem)) {
//     console.log(power);
// }

// // a gun: kill
// // fire: burn
// // wind: chill
// // a mind: learn
// // anger: rage
// // smile: heal

 



// // re = / /gs

// // while (match = re.exec(poem)) { .. }


            //----- 38 - ( Async Await - Async Functions )

// fetchCurrentUser ()
// .then(function onUser(user) {
//     return Promise.all([
//         fetchArchivedOrders( user.id ),
//         fetchCurrentOrders( user.id )
//     ]);
// })
// .then(function onOrders (
//     [ archivedOrders, currentOrders ]
// ){
//     // ..
// });            

                            // (2)  (Async with generators)

// requestAnimationFrame(function *main(){
//     var user = yield fetchCurrentUser();

//     var [ archivedOrders, currentOrders ] =
//         yield Promise.all([
//             fetchArchivedOrders( user.id ),
//             fetchCurrentOrders( user.id )
//         ]);

//         //  ...
// });                            

                            // (3) (async func.)

// async function main() {
//     var user = await fetchCurrentUser();

//     var [ archivedOrders, currentOrders ] =
//         await Promise.all([
//             fetchArchivedOrders( user.id ),
//             fetchCurrentOredrs( user.id )
//         ]);

//         // ..
// }            

// main();


            //----- 39 - ( Async Await Exercise )

// function getFile(file) {
//     return new Promise(function(resolve){
//         fakeAjax(file,resolve);
//     });
// }      

// async function loadfiles(files) {
//     // request all files concurrently 

//     // print in order, sequentially
// }

// loadFiles(["file1","file2","file3"]);

// //************************************* */

// function fakeAjax(url,cb) {
//     var fake_responses = {
//         "file1": "The first text",
//         "file2": "The middle text"
//     }
// }


            //----- 40 - ( Async Await Solutions )

// function getFile(file) {
//     return new Promise(function(resolve){
//         fakeAjax(file,resolve);
//     });
// }      

// async function loadfiles(files) {
//     // request all files concurrently 

//     // var pr1 = getFile(files[0]);
//     // var pr2 = getFile(files[1]);
//     // var pr3 = getFile(files[2]);

//     var prs = files.map(getFile);
    
//     // print in order, sequentially

//     prs.forEach(function output(pr){
//         console.log(await pr);
//     })

//     // for (let pr of prs) {
//     //     console.log(await pr);
//     // }
// }

// loadFiles(["file1","file2","file3"]);

// //************************************* */

// function fakeAjax(url,cb) {
//     var fake_responses = {
//         "file1": "The first text",
//         "file2": "The middle text"
//     }
// }


            //----- 41 - ( Async Await - Async Iteration )

// async function fetchFiles(files) {
//     var prs = files.map( getFile );

//     prs.forEach( function each(pr) {
//         console.log(await pr );
//     });
// }                

                            // (2) (better async FP iterations)

// async function fetchFiles(files) {
//     var prs = await FA.concurrent.map( getFile, files );

//     await FA.serial.forEach( async function each(pr) {
//         console.log( await pr );
//     }, prs );
// }                            


            //----- 42 - ( Async Await - Async Func. Problems )

// 1. await Only Promises
// 2. Scheduling (Starvation)        
// 3. External Cancelation    

                            // (1) (cancelable async func.)

// var token = new CAF.cancelToken();

// var main = CAF( function *main(signal,url){
//     var resp = yield fetch( url, { signal } );
//     // ..

//     return resp;
// } );

// main( token.signal, "http://some.tld/other" )
// .then( onResponse, onCancelOrError );

// // only wait 5 seconds for the request!
// setTimeout( function onElapsed() {
//     token.abort("Request took too long!" );
// }, 5000 );

                            // (2) (timeout cancelation)

// var timeoutToken = CAF.timeout( 5000, "Took too long!" );

// var main = CAF( function *main(signal,url) {
//     var resp = yield fetch( url, { signal } );
//     // ..

//     return resp;
// } );

// main( timeoutToken, "http://some.tld/other")
// .then( onResponse, onCancelOrError );


            //----- 43 - ( Async Await - Async Generators with yield )

// async function fetchURLs(urls) {
//     var results = [];

//     for (let url of urls) {
//         let resp = await fetch( url );
//         if (resp.status == 200) {
//             let text = await resp.text();
//             results.push( text.toUpperCase() );
//         }
//         else {
//             results.push( undefined );
//         }
//     }
//     return results;
// }            

                            // (2) (overload yield)

// function *fetchURLs(urls) {
//     for (let url of urls) {
//         let resp = yield fetch( url );
//         if (resp.status == 200) {
//             let text = yield resp.text();
//             yield text.toUpperCase();
//         }
//         else {
//             yield undefined;
//         }
//     }
// }                                

                                // (3)

// function *fetchURLs(urls) {
//     for (let url of urls) {
//         let resp = await fetch( url );
//         if (resp.status == 200) {
//             let text = await resp.text();
//             yield text.toUpperCase();
//         }
//         else {
//             yield undefined;
//         }
//     }
// }                                   


            //----- 44 - ( Async Await - Async Generators Iteration )

                            // (1) (upfront)

// async function *fetchURLs(urls) {
//     var prs = urls.map( fetch );

//     for (let pr of prs) {
//         let resp = await pr;
//         if (resp.status == 200) {
//             let text = await resp.text();
//             yield text.toUpperCase();
//         }
//         else {
//             yield undefined;
//         }
//     }
// }

                            // (2)

async function main(favoriteSites) {
    var it = fetchURLs( favoriteSites );

    while (true) {
        let res = await it.next();
        if (res.done) break;
        let text = res.value;

        console.log( text );
    }
}                           

/*************************** */

async function main(favoriteSites) {
    for await (let text of fetchURLs( favoriteSites )) {
        console.log( text );
    }
}










