//First thing that javascript does is create something called
//the global execution content, which itself further seperates into
//the creation and the execution phase.


//The Creation phase 4 things happen and they happen before any of your code runs
//It creates the global object - this contain all the in-built method that javascript provides with
//It creates the keyword this - the keyword this simply points at another object (more on this later)
//It allocates memory to your functions - Javscript goes line by line and checks your functions
//It creates the scope chain -  Global, variable, and function scope determines where each variable is available in your code

//In the execution phase is where your code is essentially running
//Once the creation phase is finished then your code can start
//However javascript is already aware of your functions since it has
//allocated memory to them. As such you can invoke functions at any stage of your 
//code without any problem

alertMessage(); //Prints This still works

function alertMessage(){
    console.log('This still works'); 
}

//The above functionallity is called hoisting. Hoisting used to be more important during the era of var
//But currently it's not as important since let and const has solved that issue for us.