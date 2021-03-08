//This keyword is created at the start of the execution context.
//Since invoking a functions creates a new execution content, it is also created
//at the start of a function as well.


//All this is a pointer that refers to an object. By default it points to the 
//global window object. However we change change that according to what we want it to
//reference

//We are in the global execution context and this points to windwo object
function sayThis(){
    //Nothing changes here, this still points to the global window
    console.log(this); //Prints the Window object
}

sayThis(); //we are entering the sayThis() execution context

const user = {
    name: 'DevelopedByEd',
    sayHi(){
        console.log(this);
    }
};


user.sayHi();
//Weh we use this within the context of an object, then this points to the object itself
//It stops pointing at the global window. This becomes dynamic essentially. To better understand what
//this might point to is to understand where the function is being invoked. And also see what's left to that
//function invokation.

const admin = {
    name: 'admin'
};