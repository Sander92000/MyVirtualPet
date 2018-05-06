class Pet {
    constructor(){
        this.name = window.prompt("What name would you like to give to your pet?");
        this.life = 100;
        this.hunger = 0;
        this.hygene = 100;
        this.play = 100;
        this.love = 100;
        this.energy = 100;
        this.blatter = 0;
    }

    getName(){
        name = window.prompt("What name would you like to give to your pet?");
        return name;
    }

    sayName(){
        console.log("Hello my name is: " + this.name);
    }

    getFood(){
        this.hunger += 1;
        this.updateData();
    }

    eating(){
        this.hunger -= 1;
        this.updateData();
    }

    getClean(){
        this.hygene += 1;
        this.updateData();
    }

    getDirty(){
        this.hygen -= 1;
        this.updateData();
    }

    sleep(){
        this.energy += 1;
        this.updateData();
    }

    awake(){
        this.energy -= 1;
        this.updateData();
    }

    updateData(){
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('life').innerHTML = this.life;
        document.getElementById('hunger').innerHTML = this.hunger;
        document.getElementById('hygene').innerHTML = this.hygene;
        document.getElementById('play').innerHTML = this.play;
        document.getElementById('love').innerHTML = this.love;
        document.getElementById('energy').innerHTML = this.energy;
        document.getElementById('blatter').innerHTML = this.blatter;
    }
}