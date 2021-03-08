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
//As you can see it get out of hand very easily the more users/data
//We have to deal with

//Instead we might use objects to help us structure all those variables

//Objects are essentially a collection of repeating data, for example
//all users have a name, agem and status data representing them, so pairing them
//makes our lives easier to deal with them

//Let's create an object
//Objects work in a key-value pair
const user = {
    name: 'Panos',
    age: 25,
    status: 'In a relationship',
    //We can also introduce functions within objects
    //These are called methods
    greet: function(){
        console.log('Hey, this is an object function');
    }
};

//In order to access their values we define objectName.keyName
console.log(user.name); //Prints Panos
//We can also access their methods like this objectName.methodName()
user.greet(); //Prints Hey, this is an object functions


//Objects reminds us a lot of arrays
//Let's create an array and an object with usernames and see the similarities

//We can think of the array indexes acting as the key for each value
const userNamesArray = [
    'Panos', //0: 'Panos'
    'John', //1: 'John'
    'Doe', //2: 'Doe'
];

const userNamesObject = {
    userName1: 'Panos',
    userName2: 'John',
    userName3: 'Doe'
};


//However this .method notation seems very familiar to us, and we have seen it before
//with console.log() for example. This is because in javascript we always have acceess to an
//object called window, and with it we can access a bunch of already built-in methods that
//javascript has. In the end, everything in javascript, is an object, and most likely a method 
//already exists to help us do some type of functionality with set object.





