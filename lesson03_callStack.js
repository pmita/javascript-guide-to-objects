//The way js works is, before executing it reads each line individually and moves
//on to the following line. As this happens it defining the scope chain, possible hoisting,
//declares function, and assign memory to functions and variables. This happens before you js code starts to run

//As your javascript code runs line by line, it starts a new execution context once it encounters
//a new function is invoked. At that stage we are no longer within the global execution context and we can
//only return to it once the invoked function is either returned or breaked. 

//The new execution context is positioned on top of the global like a stack of books. If more functions 
//are invoked then this stack keeps building up. The queue of all the context is called a callstack and
//it is a way that the javascript engine keeps up with with everything in your code. The callstack queue
//works in a last in - first out order.

//Let's see all these in action


function sayHi(){ //1. JS engine reads this line during creation phase
    console.log(`hellow there ${yourName}`); //5. We are now in sayHi() execution context
    changeName(); //6. Once JS engine reaches this point, changeName() exection context is created. We are no longer in sayHi() context
    console.log(`sayHi() finishes its execution context after this line`); //10. We come back to sayHi(). We are exiting sayHi()() context after this line
}

function changeName(){ //2. JS engine reads this line during creation phase
    yourName = 'John Doe'; //7. We are now in changeName() execution context
    console.log(`Name is changed to ${yourName}`); //8. We are now in changeName() execution context
    console.log(`changeName() finishes its execution context after this line`); //9 We are exiting changeName() context after this line
}

let yourName = 'Panos'; //3. JS engine reads this line during creation phase

sayHi(); //4. Once JS engine reaches this point, sayHi() exection context is created. We are no longer in global context

console.log(`The global execution context finishes after this line. The callastack queue is now empty`); //11. We are back to global context, which finishes after this line.


