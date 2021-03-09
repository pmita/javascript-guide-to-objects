//However defining methods within our constructor isn't best pracice. As we introduce more and 
//more objects with the new keyword, each object will have their own version of the constructor object.
//As such each object will each have their own methods as well. We aren't referencing this, we are copying them.

//An excess use of the constructor will end up in an excess of memory allocation to all the newly created objects
//Instead we should add those methods under the prototype object of the constructor. Each object has a prototype 
//object which is a subset of all those methods that apply to it. By pushing our method under the prototype
//umbrella, we can reference them instead of copying them to every new object we create.

function ToDo(name, completed){
    this.name = name; 
    this.completed = completed; 
    //We don't need the methods introduced like this anymore
    //this.printToDos = function(){
        //console.log(`${this.name} has been completed! That is ${this.completed}`);
    //}
}

//We can instead push the printToDos method under the prototype umbrell
ToDo.prototype.printToDos = function(){
    console.log(`${this.name} has been completed! That is ${this.completed}`)
}

//The rest of the functionality works exactly the same as before, but we aresaving on unnecessary memory allocation
const todo = new ToDo('Buy eggs', false);
console.log(todo); //Prints ToDo {name: "Buy eggs", completed: false, printToDos: ƒ}
//Our todo variable has also access to the printToDos() method
todo.printToDos();

const todo2 = new ToDo('do homorwork', false);
console.log(todo2); //Prints ToDo {name: "do homework", completed: false, printToDos: ƒ}
todo2.printToDos();