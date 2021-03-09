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

//We can access getName method like this below
person.getName(); //Prints PanosMita


//And like we said a simple function always points at the window object
function registerUser(){
    //Further code
    console.log(this);
    //After bind,call, and apply is invoked our function has access to object and its methods
    this.getName(); //Prints PanosMita

}


//We can cahgne this behavior with bind(). Bind allows you to call a method on a function
//In order for it work howver we need to save the function to a variable, we need to user
//a reference function essentailly

//Let's create a new variable with function reference attached to it
//We now can call bind and pass in the person object
//Now bind points the this keyword to the person object 
const register = registerUser.bind(person);
//now registerUser() has access to our person object
register(); //Prints person object

//With apply we don't need to user function as a reference, we can simply invoke the method
registerUser.call(person); //Prints same thing as .bind()
//If our function takes more paramenters we can simply invoke registerUser.call(objectName, arg1, arg2, ..., argN);

//With apply we have the same functionality as call, but instead we pass in an array of arguements
//registerUser.apply(person, ['arg1', 'arg2', ..., 'argN']); would work simliarly to .call()
//depending on what we are working on we can select the appropriate method.

