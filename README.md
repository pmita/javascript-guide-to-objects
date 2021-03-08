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
