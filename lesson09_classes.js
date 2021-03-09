//Passing prototypal inheritance down is rasther tricky however and results in some ugly code
//that can be hard to maintain. Instead we can use classes to refactor our code with classes.
//Classes will take care of prototypal inheritance for our methods

    //Let's create a class similar to previous constructor function
    class Enemy{
        constructor(life, name, level){
            this.life = life;
            this.name = name;
            this.level = level;
        }
        //We can introduce methods directly here and they will be added to the prototype umbreall
        getInfo(){
            console.log(this.life, this.name, this.level);
        }
    }

    //Let's create a new enemy
    const turtle = new Enemy(25, 'Racket', 12);
    console.log(turtle);
    const bug = new Enemy(5, 'Muddie', 1);
    console.log(bug);

    //We can also create unique classes on top of the original Enemy class
    class Bug extends Enemy{
        constructor(life, name, level, legs, dmg){
            //instead of .call() and bind the two object we can use super() instead
            super(life, name, level);
            this.legs = legs;
            this.dmg = dmg;
        }
    }

    const Joe = new Bug(5, 'bug', 5, 8, 10);
    console.log(Joe); //Prints {life: 5, name: "bug", level: 5, legs: 8, dmg: 10}