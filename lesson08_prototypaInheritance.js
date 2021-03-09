    ///We can leverage constructors to built other constructs
    //This eliminated the use of repeated code and we can make more
    //complex functionality this way

    //Let's create a constructor function for an enemy object
    function Enemy(life, name, level){
        this.life = life;
        this.name = name;
        this.level = level;
    }
    //Add a few methods under its prototype umbrella
    Enemy.prototype.getInfo = function(){
        console.log(this.life, this.name, this.level);
    }
    Enemy.prototype.attack = function(){
        console.log(`${this.name} has attacked`);
    }
    Enemy.prototype.block = function(){
        console.log(`${this.name} has blocked`);
    }

    //Let's create another constructor function similar to enemy but with features added to it
    //We can inherit all constructor properties to our new constructor
    function Dragon(life, name, level, color, spell){
        //Keyword this references the newly created Dragon object
        //So we pass that to our previous constructor as a reference
        Enemy.call(this, life, name, level); //Remeber this is an object itself
        //And set the rest of the properties
        this.color = color;
        this.spell = spell;
    }   
    //In order for us to also inherit the prototypes of Enemy we need to explicitly do so
    Dragon.prototype = Object.create(Enemy.prototype);

    //Keyword new creats a new object with the Dragon constructor
    //Keyword new also initiates the keyword this which is empty at first
    const newDragon = new Dragon(100, 'Drogon', 25, 'green', 'fire');
    console.log(newDragon); //Prints Dragon {life: 100, name: "Drogon", level: 25, color: "green", spell: "fire"}, also Enemy's prototype is also included

    //We can also introduce explecity methods to Dragon's prototype umbrella
    Dragon.prototype.fireBreath = function(){
        console.log('Fire breath attack');
    } 
    newDragon.fireBreath(); //Prints Fire breath attack