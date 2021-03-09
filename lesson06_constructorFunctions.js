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

//The new keyword creates a new empty object for us
//It also sets the keyword this to that new built object
//However the object itself is empty
const todo = new ToDo('Buy eggs', false);
console.log(todo); //Prints ToDo {name: "Buy eggs", completed: false, printToDos: ƒ}
//Our todo variable has also access to the printToDos() method
todo.printToDos();

//Similarly we can use the constructor function for more than one variable at a time
const todo2 = new ToDo('do homorwork', false);
console.log(todo2); //Prints ToDo {name: "do homework", completed: false, printToDos: ƒ}
todo2.printToDos();