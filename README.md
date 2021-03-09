# Objects in Javascript

Full breakdown of what objects are and how they work in javascript.

## Getting Started

Simply link each javascript lesson you are working on in your html

### Lessons covered include

Object Basics

```
//Imagine having to deal with multiple users, and each users
//Has their own details we care about
//User 1
const name = 'Panos';
const age = 225;
const status = 'In a relationship';
//User 2
const name2 = 'John';
const age2 = 22;
const status2 = 'In a relationship';
//User 3
const name3 = 'Doe';
const age3 = 21;
const status3 = 'Single';
```

Global Execution Content

```
//First thing that javascript does is create something called
//the global execution content, which itself further seperates into
//the creation and the execution phase.
```

CallStack

```
Before any function is invoked we fall under the global execution stack
 - - - - - -
| global(); |
 - - - - - - 
 
 However as functions are invoked, new execution contexts are created and are only exited once their js code runs
 - - - - - - - - 
| funcionOne(); |
 - - - - - - - -
 - - - - - -
| global(); |
 - - - - - - 
 
 If further functions are nested then the callstack queue grows accordingly
 - - - - - - - - 
| funcionTwo(); |
 - - - - - - - -
 - - - - - - - - 
| funcionOne(); |
 - - - - - - - -
 - - - - - -
| global(); |
 - - - - - - 
 
 Only once that last function in the callstack has finished it is removed from the stack, and our js code pick up with the new in the queue
  If further functions are nested then the callstack queue grows accordingly
                         - - - - - - - - 
    Removed --->       | funcionTwo(); |
                         - - - - - - - -
 - - - - - - - - 
| funcionOne(); |
 - - - - - - - -
 - - - - - -
| global(); |
 - - - - - - 
 
 After functionOne() is also finished then that is removed from the stack as well
                     - - - - - - - - 
 Removed --->       | funcionTwo(); |
                     - - - - - - - -
                     - - - - - - - - 
 Removed --->       | funcionOne(); |
                     - - - - - - - -
 - - - - - -
| global(); |
 - - - - - - 

```

This keyword

```
//This keyword is created at the start of the execution context.
//Since invoking a functions creates a new execution content, it is also created
//at the start of a function as well.


//All this is a pointer that refers to an object. By default it points to the 
//global window object. However we change change that according to what we want it to
//reference

//We are in the global execution context and this points to window object
function sayThis(){
    //Nothing changes here, this still points to the global window
    console.log(this); //Prints the Window object
}
```

Call, bind, apply methods

```
//At the end of the day, functions are special created objects
//And they always have access to 3 special methods called call, bind, apply

//Let's create below object
const person = {
    firstName: 'Panos',
    lastName: 'Mita',
    getName(){
        console.log(this.firstName + this.lastName);
    }
};
```

Constructor functions

```
//Constructor function is essentially a function that allows us to create an object

//Make sure constructor functions always start with a capital letter!
function ToDo(name, completed){
    console.log(this); //Prints the empty object that the keyword new has created
    this.name = name; //Now we are populating the object
    this.completed = completed; // we essentially say this.keyName = value
    //We can also define methods within our constructor
    this.printToDos = function(){
        console.log(`${this.name} has been completed! That is ${this.completed}`);
    }
}
```

Prototype

```
//However defining methods within our constructor isn't best pracice. As we introduce more and 
//more objects with the new keyword, each object will have their own version of the constructor object.
//As such each object will each have their own methods as well. We aren't referencing this, we are copying them.
```

Prototypal Inheritance

```
    ///We can leverage constructors to built other constructs
    //This eliminated the use of repeated code and we can make more
    //complex functionality this way
```
