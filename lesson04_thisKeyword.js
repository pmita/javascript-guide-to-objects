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

sayThis(); //we are entering the sayThis() execution context


//But in other occassions this points to more specific items, such object we have created
//Let's creat an object
const user = {
    name: 'Panos',
    sayHi(){
        console.log(this);
    }
};

//When we use this within the context of an object, then this points to the object itself
//It stops pointing at the global window. This becomes dynamic essentially. To better understand what
//this might point to is to understand where the function is being invoked. And also see what's left to that
//function invokation.
user.sayHi(); //Prints the user object


//However this can be further generilized
//Create two objects again
const admin = {
    name: 'admin'
};

const owner = {
    name: 'owner'
};

function sayHi(){
    console.log(this);
}

//We also attach the sayHi() function as a method to our objects
admin.hi = sayHi;
owner.hi = sayHi;

//And then we can invoke them
admin.hi(); //Prints admin object
owner.hi(); //Prints owner object


//At last you need to remember that invoking a new function can break your this pointer and point to something
//You don't want or expected to. A way to deal with this is to either pass in the this object to a self variable that 
//indented function can still accee. Or simply utilize arrow functions! Arrow functions do not create a new this keyword.