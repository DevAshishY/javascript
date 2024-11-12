
## Questions

**# T1 call apply bind**

    call is a function that helps change the context of the invoking function.
    apply is similar to the call function.difference is that in apply you can pass an array as an argument list.
    bind is a function that helps create another function that you can execute later with the new context of this that 
    is provided.

https://codesandbox.io/p/sandbox/call-apply-bind-mj45zd

------------------------------------------

**# T2 events flow(Bubbling Capturing) or propagation**

    event Bubbling
    when an event is triggered on a dom element, it first fires on that element, then on its parent, and so on, 
    propagating up the DOM tree.
    
    event Capturing 
    opposite of event bubbling, where the event is captured at the top most parent element and then propagates down to 
    the target element

    stop propagation

https://codesandbox.io/p/sandbox/bubbling-capturning-stop-64wl3y

------------------------------------------
**# T4 event delegation**

    event delegation is a technique where you attach an event listener to a parent element to handle events for its 
    child elements.

https://codesandbox.io/p/sandbox/event-delegation-2jnn98

------------------------------------------

**# T5 event.preventDefault and return false, javascript:void(0)**

    event.preventDefault() method is used to prevent the default behavior of an event and the link click will be 
    prevented.
    
https://github.com/DevAshishY/coding/blob/main/javascript/preventDefault_returnFalse/demo.html

------------------------------------------
**# T6 shallow & deep copy**

    using the spread operator to copy an object or array,there are two types of copying: shallow and deep.
    shallow copy creates a new object or array, but only the top-level values are copied by reference. This means that 
    if any copied values are themselves objects or arrays, they will  till be referenced to then original objects or 
    arrays.
        
    deep copy creates a completely new object or array, where all the nested values are also copied by value. This 
    means that all the properties of the original object or array are duplicated, and no references are retained.
    
https://github.com/DevAshishY/coding/blob/main/javascript/shallow_deep/demo.html

https://codesandbox.io/p/sandbox/shallow-deep-copy-4krx2p


------------------------------------------
**# T7 lexical scope**

  ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound.

------------------------------------------
**# T8 closure**

 closures allow functions to remember the variables from the scope where they were created, even if the function is executed in a different scope.

https://codesandbox.io/p/sandbox/lexical-closure-j4fgj2

------------------------------------------
**# T9 curring**

    currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.
    currying helps you avoid passing the same variable again and again.
    It helps to create a higher-order function.

https://codesandbox.io/p/sandbox/curring-pzm7vg

------------------------------------------
**# T10 normal function vs  arrow(lamda)**

    this keyword refers to the current context of the object.

    normal function
    the normal function gives the arguments

    arrow function
    this is not present itself. It presents one label up or surrounding and we can not change this
    arrow function does not give the arguments

https://github.com/DevAshishY/coding/blob/main/javascript/arrow_function/demo.html


https://codesandbox.io/p/sandbox/arrow-function-x6dc5d

------------------------------------------
**# T11 synchronous v/s asynchronous**

    synchronus- code excute line by line.
    asynchronous- code run in the background without blocking the execution of other code.

------------------------------------------
**# T12 callback**

https://codesandbox.io/p/sandbox/callback-callbackhell-qmtt4r

------------------------------------------
**# T13 callback**

    Answer

------------------------------------------
**# T14 promises & chaining its method all race any**

https://github.com/DevAshishY/coding/blob/main/javascript/promise/demo.html

------------------------------------------
**# T15 asyc,await and try catch**

https://github.com/DevAshishY/coding/blob/main/javascript/asyc_try_catch/demo.html

------------------------------------------
**# T16  difference between process.nextTick() and setImmediate()**

https://github.com/DevAshishY/coding/blob/main/javascript/setimmediate-timout-processNext/demo.js

------------------------------------------
**# T17 Http method(crud)**

    Answer

------------------------------------------
**# T17 fetch,axios,ajax**

    fetch API is used to make network requests, typically to fetch resources from a server. It returns a promise that 
    resolves to the Response object representing the response to the request.
    
    axios

    Ajax-
    without reload page we can communicate with server

------------------------------------------
**# T19 how to handle Abort in fetch**

    Answer

------------------------------------------
**# T20 memoization**

    Memoization is a technique used in programming to optimize the execution time of functions by caching their results. It involves storing the results of expensive function calls and reusing those results when the same inputs occur again.

------------------------------------------
**# T21 why use Debouncing & throttling**

    Answer

------------------------------------------
**# T22 prototype inheritance**

    when we create any object in javaScript.then we find a special property inside the created object that is called prototype  
    prototype  is an object that gives some methods and properties.
    we can enables all the other objects to inherit these methods and properties.
    We can set proto using- dunder proto.

https://codesandbox.io/p/sandbox/prototypes-pfy2nz


------------------------------------------
**# T23 prototypes chaining**

    
    @@@ use case-
    let obj1={
        key1:'value1',
        key2:'value2'
    }
    let obj2={
        key3:'value3'
    }
    console.log(obj2.key3);
    console.log(obj2.key1);

    @@@ solve-
    let obj1={
        key1:'value1',
        key2:'value2'
    }
    let obj2=Object.create(obj1)
    obj2.key3='value3'
    console.log(obj2);
    console.log(obj2.key1);
    console.log(obj2.__proto__);
    

------------------------------------------
**# T24  difference between __proto__ vs prototype**

    [[prototype] , __proto__ -  it is the same. but the prototype is different.
    Only functions create prototype array, the object we can see the prototype and by __proto__ we can set.

------------------------------------------
**# T25 local storage & session storage & cookies**

    local storage-
    method- localStorage.setItem/(key,value),getItem(key),removeItem(key),clear()
    capacity of local storage is 5mb
    it is not session-based it must be deleted via javascript or manually. 
    client  can only read local storage.
    
    session storage- 
    method- sessionStorage.setItem(key,value),getItem(key),removeItem(key),clear()
    capacity of session storage is 5mb.
    it’s session-based and works per window or tab.
    client  can not  read session storage.

    cookies-
     capacity of session storage is 4kb.
     cookies expire based on the setting and working per tab and window.
     Both clients and servers can read and write the cookies 

https://codesandbox.io/p/sandbox/localstorage-in-js-vzkxgg


------------------------------------------
**# T26 let var const & hoisting**

    Answer

------------------------------------------
**# T27 TDZ in j.s. and how does it relate to let and const.**

    TDZ is a specific period in the execution of js code where variables declared with let and const exist but cannot 
    be accessed or assigned any value. During this phase, accessing or using the variable will result in a 
    ReferenceError

------------------------------------------
**# T28 use Strict**

    treat this code as a newer version.

    "use strict";  
    x=10;  
    console.log(x);  // gives the error because x is not defined defined any variable types.


------------------------------------------
**# T29 defer and async**

    defer attribute tells the browser to download the script while parsing the HTML but execute it only after the HTML 
    parsing is complete.
    async attribute tells the browser to download the script in the background without blocking HTML parsing, and it 
    will execute the script as soon as it's downloaded.

------------------------------------------
**# T30 what is issue when js file call bottom of the html page**

    it is a synchronous nature.because all html parse then js file loaded and excuted.

------------------------------------------
**# T31 how js works & event loop**

    event loop- event loop is a bridge b/w callstack & callback queue or task queue.it monitors the callstack until it 
    finishes executing function present itside
    it, if callstack gets empty ,it transfers the next function waiting in the callback queue into callstack.

------------------------------------------
**# T32 task Queue in JavaScript**

    microtask queue- 
    Promise callBack
    async function
    queueMicroTask.
    macrotask queue-
    setTimeout()
    setInterval()
    setImmediate()

------------------------------------------
**# T33 different setTimeout & setInterval**

 setTimeout-code run only one times.
 setInterval-code run a specific time gap.

------------------------------------------
**# T34 ssr & csr**

    Answer

------------------------------------------
**# T35 classes**

    Answer

------------------------------------------
**# T36 setter & getter**

    Answer

------------------------------------------
**# T37 oops concept**

    polymorphism : one name different form :she can house wife can doctor
    Method overriding : child class have same method as parent class
    Method overloading: multiple method create in same name on same class
    polyfills- map,forEach,call,apply,bind,arrayflat,deep-copy,reduce, copare two object

------------------------------------------
**# T38 JWT & session id**

    json web token compact, URL-safe means of representing claims to be transferred between two parties. It's digitally signed, which makes it secure. JWTs can contain user information and are commonly used for authentication and information exchange in web development. They are self-contained, meaning they contain all the necessary information about the user and do not need to be stored in a database.

    structure: 

    JWTs consist of three parts separated by dots: header, payload, and signature.

    Header: Contains metadata about the type of token and the signing algorithm used.

    Payload: Contains claims, which are statements about an entity (usually the user) and additional data. Claims can be registered, public, or private

    Signature: Created by combining the encoded header, encoded payload, a secret key, and the specified algorithm. It ensures 
    the integrity of the token.
    session ID:

    A session ID is a unique identifier assigned to a user's session when they access a web application. It is typically stored in a cookie or in the URL and is used to associate the user's requests with their session data stored on the server. Session IDs are often used in combination with server-side session storage to maintain user sessions. Unlike JWTs, session IDs require server-side storage and management.

------------------------------------------
**# T39 authtecation & autherization**

    Authentication is the process of verifying the identity of a user or system. It confirms that the user is who they claim to be. Common authentication methods include passwords, biometric authentication (like fingerprints or facial recognition), and multi-factor authentication (MFA).

    Authorization, on the other hand, is the process of determining whether an authenticated user has the necessary permissions (or authorization) to access specific resources or perform certain actions within the application. Authorization is usually based on the user's role or specific permissions assigned to them.

------------------------------------------
**# T40 cors in web api**

    "Imagine your website is like a person trying to make a phone call to another person, but they are in different countries. CORS, or Cross-Origin Resource Sharing, is like the security check that happens when you're trying to make that call. Browsers have built-in security measures to prevent a website in one 'country' (origin) from making requests directly to another 'country' without permission.

    So, when you see a CORS error, it's like the browser saying, 'Hey, this website is trying to make a request to another place, but I'm not sure if it's allowed.'

    To fix this, you need to tell the browser that it's okay for your website to talk to the other one. It's like getting a special passport or permission slip. You do this by configuring your server to include specific headers in its responses, basically saying, 'Yes, other websites are allowed to request and use my resources.

------------------------------------------
**# T41 javascript compiled or interpreted**

It seems like a very simple question but it's not that easy to answer. As per hashtag#javascript official mdn documentation "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions." So as per official documentation hashtag#javascript is interpreted.

------------------------------------------
**# T42 status code**

    Answer

------------------------------------------
**# T43 Enum in js**

it is use define to set of const value

------------------------------------------
**# Array Method**

    reduce

    foreach
    
    map 


------------------------------------------
**# T45 Describe the concept of modular JavaScript and how it can help improve code maintainability and reusability**

    Answer

------------------------------------------
**# T46 polifills**

    bind

------------------------------------------
**# T47 If there is a for loop running over some time and your browser is not responding on that particular time. What will you do to make browser available and always responding to the user**

    Answer

------------------------------------------
**# T48 What is Service worker**

    Answer

------------------------------------------
**# T49 Different ways to create an Object in Javascript**

    Object Literals

    Constructor Function

    Object.create()

    Class Syntax (ES6):

    Factory Functions: 

    Object.setPrototypeOf():

    Object.assign() 


------------------------------------------
**# T50 ES6 feature**

    destructuring

    arrow function

------------------------------------------
**# T51 function**

    javascript function is the (combo of object & function).we can add a property in the function.function provided more usefull properties-call,apply,bind.
    
    when function is creating then gives me free space (like object) that is called prototype.only functions provide prototype array & object is not.

------------------------------------------
**# T52 pure , impure and function expression and function declaration function**

    pure function- Does not modify the state of the application.only depends on its input parameters.
    impure function-It can modify the state of the application.It  can be dependent on other parts of the code.

    function expression

    function declaration

------------------------------------------
**# T53 IIFE function**

 encapsulating code and variables within a private scope.it's prevent pollution of the global JS scope.

------------------------------------------
**# T54 Both GraphQL and REST are used**

    Both GraphQL and REST are used to build Web APIs but there are a lot of differences between the two technologies. Check this beautiful infographic to see the differences between the two technologies. 

------------------------------------------
**# T55 difference between `null` and `undefined` in JavaScript**

    - `null` is an explicitly assigned value that represents the absence of any value.
    - `undefined` is a variable that has been declared but has not been assigned a value.

------------------------------------------
**# T56  Web Components**

Web Components are a set of web platform APIs that allow you to create reusable custom elements with their own encapsulated HTML, CSS, and JavaScript

------------------------------------------
**# T57 Set function in JavaScript**

    Answer

------------------------------------------
**# T58 isNaN**

    isNaN() method returns true if a value is NaN. isNaN() method converts the value to a number before testing it.
    
    console.log(isNaN(123));
    console.log(isNaN(0));
    console.log(isNaN('123'));
    console.log(isNaN('Hello'));
    console.log(isNaN('2005/12/12'));
    

------------------------------------------
**# T59 difference between == and === operators**

    0 == false   
    0 === false   
    1 == "1"     
    1 === "1"   
    null == undefined 
    null === undefined
    '0' == false 
    '0' === false 
    []==[] or []===[] 
    {}=={} or {}==={} 

------------------------------------------
**# T60 Difference b/w addEventListener & onclick**

    addEventListener-
    addEventListener can add multiple events to a particular element.
    addEventListener can take a third argument that can control the event propagation.
    addEventListener can only be added within <script> elements or in external JavaScript file.

    onclick-
    onclick can add only a single event to an element. It is basically a property, so gets overwritten.e
    event propagation cannot be controlled by onclick.
    onclick can be added as an HTML attribute also.




------------------------------------------
**# T62 error types in js**

     Syntax error, Reference Error, Type Error, Evaluation Error, RangeError, URI Error and Internal Error

------------------------------------------


**# T63 do't use var**

    Prefer not to use var
because of issue in block scope and functional scope

------------------------------------------

**# 64 "use strict"**

 // treat all JS code as newer version



## Examples



**# T1 Debouncing & throttling**

    Answer

------------------------------------------

**# T2**

    let arr = [10,20,30,40]
    target element: 50 - gives me an index that can add to the target like [1,2]
    and let me the complexity

------------------------------------------
**# T3**

    let cart = [
    {product:'mil', quantity:10, price:10.2}
    {product:'mil', quantity:10, price:10.2}
    ]
    total price

------------------------------------------
**# T4**

    0.1+ 0.2 === 0.3 floating conversion
    log(0015) octa represention number 8 ki power index in right side

------------------------------------------
**# T5**

    console.log(2 + '2' - '2');
    console.log(typeof typeof 1);
    console.log(3 > 2 > 1);
    let a = [1, 2, 3];
    let b = [1, 2, 3];
    console.log(a == b, a === b); false false

------------------------------------------
**# T6**

    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

------------------------------------------
**# T7**

    let a = { x: 1 };
    let b = a;
    b.x = 2;
    console.log(a.x); 2

------------------------------------------
**# T8**

    const array = [1, 2, 3, 4];
    let data = array.reduce((result,current)=>{
    return result+current
    },0)
    console.log(data);

------------------------------------------
**# T9**

    const employee = {
    name: 'Alice',
    age: 30,
    position: 'Developer'
    };

    const colors = ['red', 'blue', 'green'];
    output - Alice, 30, red, blue

------------------------------------------
**# T10 Implement a function to reverse the order of words in a sentence without using the built-in `split` or `reverse` functions.**

    Answer

------------------------------------------
**# T11 Sort an array of objects based on a specific property of the objects**

    Answer

------------------------------------------
**# T23 Given two strings, find the longest common subsequence (not necessarily contiguous) between them**

    Answer

------------------------------------------
**# T24 Implement a function to find the first non-repeating character in a string**

    Answer

------------------------------------------
**# T25 Implement a function to check if a string is a valid parentheses sequence.**

    Answer

------------------------------------------
**# T26 Given a matrix, rotate it by 90 degrees clockwise (in-place or by returning a new matrix).**

    Answer

------------------------------------------
**# T27 Implement a function to flatten a nested object and convert it into a flat key-value pair.**

    Answer

------------------------------------------
**# T28 Find the missing number in an array containing consecutive numbers from a given range.**

    Answer

------------------------------------------
**# T29 Given an array of integers, rearrange the elements in such a way that all the even numbers appear before the odd numbers.**

    Answer

------------------------------------------
**# T30 Given a sorted array with duplicate elements, remove the duplicates in-place (without using extra space).**

    Answer

------------------------------------------
**# T31 Implement a function to generate all possible subsets of a given set.**

    Answer

------------------------------------------
**# T32 Implement a function to find the largest sum of a contiguous subarray within an array (Kadane's algorithm).**

    Answer

------------------------------------------
**# T33 Given an array of intervals, merge overlapping intervals**

    Answer

------------------------------------------
**# T34 Implement a function to calculate the square root of a number without using built-in functions.**

    Answer

------------------------------------------
**# T35 Implement a function to find the kth smallest element in an unsorted array.**

    Answer

------------------------------------------
**# T36 Given a string, find the longest substring without repeating characters.**

    Answer

------------------------------------------
**# T37 Given an array of integers, rearrange the elements such that all negative numbers appear before the positive numbers, without changing the relative order of the elements.**

    Answer

------------------------------------------
**# T38 Implement a function to calculate the number of trailing zeros in the factorial of a given number.**

    Answer

------------------------------------------
**# T39 Given a string, find the longest palindromic substring**

    Answer

------------------------------------------
**# T40 Given a string, check if it is a valid parentheses sequence considering multiple types of parentheses (e.g., (), [], {}).**

    Answer

------------------------------------------
**# T41 Implement a function to calculate the maximum sum of non-adjacent elements in an array.**

    Answer

------------------------------------------
**# T42 Given a sorted array, remove all occurrences of a specific value in-place.**

    Answer

------------------------------------------
**# T43 Given a string, find the length of the longest palindromic subsequence (not necessarily contiguous).**

    Answer

------------------------------------------
**# T44  Given an array of integers, find the maximum product of three numbers.**

    Answer

------------------------------------------
**# T45 Given a string, find the length of the longest substring with at most k distinct characters.**

    Answer

------------------------------------------
**# T46**

    (var i = 1; i < 5; i++) { setTimeout(() => console.log(i), 1000) }

------------------------------------------
**# T47**

    if(i===1 && i === 2 && i === 3) console.log(“yes”) else console.log(“yes”) What will you implement " i " so that we always get “yes”

------------------------------------------
**# T48**

    Write a program for sum(1)(2)

------------------------------------------
**# T49 How to design carousal**

    Answer

------------------------------------------
**# T50 Write a JavaScript program to find out the names whose age is less than 50**

    Answer

------------------------------------------
**# T51 Write a program to merge two arrays so that the result hold only unique item values**

    Answer

------------------------------------------
**# T52 Implement a function that serializes a Javascript value into a JSON string—(asked in Meta)**

    Answer

------------------------------------------
**# T53 Implement a function that performs a deep copy of a value, but also handles circular references—(asked in Adobe, Tekion, Navi)**

    Answer

------------------------------------------
**# T54 Implement a function that determines if two values are deep equal—(asked in Google, Tekion)**

    Answer

------------------------------------------
**# T55 Implement the functionality behaviour of Promise.any—(asked in Zepto)**

    Answer

------------------------------------------
**# T56 Implement the functionality behaviour of Promise.allSettled—(asked in Tekion, Adobe)**

    Answer

------------------------------------------
**# T57 Implement a function that returns a memoized version of a function which accepts a single argument—(asked in Meta, Intuit, Gameskraft)**

    Answer

------------------------------------------
**# T58 Implement a function that deserializes a JSON string into a Javascript value—(asked in Meta)**

    Answer

------------------------------------------
**# T59 Implement a class that can subscribe to and emit events that trigger attached callback functions—(asked in Flipkart, Jio, Adobe, Meta, Tekion)**

    Answer

------------------------------------------
**# T60 Implement a debounce function that comes with a cancel method to cancel delayed invocations—(asked in Flipkart, MakeMyTrip, Google...)**

    Answer

------------------------------------------
**# T61 Implement a function that recursively flattens an array into a single level deep—(asked in Disney+Hotstar, Rippling)**

    Answer

------------------------------------------
**# T62 Implement a promisify function that allows the original function to override the return value—(asked in Amazon)**

    Answer

------------------------------------------
**# T63 Implement a function to execute N async tasks in series—(asked in Jio, MakeMyTrip, Tekion)**

    Answer

------------------------------------------
**# T64 Implement a function to execute N async tasks in parallel—(asked in Zepto, Paytm, BookMyShow)**

    Answer

------------------------------------------
**# T65 Implement a function to execute N async tasks in race.**

    Answer

------------------------------------------
**# T66 Implement a pipe function which chains N number of functions—(asked in Adobe)**

    Answer

------------------------------------------
**# T67 Implement negative indexing in Array using Proxies**

    Answer

------------------------------------------
**# T68 Implement Lodash \_.get method which gets value from the path—(asked in TikTok, Amazon, Quizzizz, MindTickle)**

    Answer

------------------------------------------
**# T69 Implement your custom version of the call method which sets the "this" context—(asked in Meesho)**

    Answer

------------------------------------------
**# T70 Implement throttling of promises which throttles API requests to max limit.**

    Answer

------------------------------------------
**# T71 Implement memoizing or caching identical API requests—(asked in Facebook)**

    Answer

------------------------------------------

    Answer
