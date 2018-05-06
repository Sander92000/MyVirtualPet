//Global variables
var pet;

//Eventlisteners
document.getElementById('newPet').addEventListener('click', createNewPet);

function createNewPet(){
    pet = new Pet();
    pet.updateData();
}

function main(){
    // tous les 5 secondes appele cette fonction
    // Fait manger
    
    // fait chier
    // A nettoyer
    // A jouer
    setInterval(main, 5*1000);

    pet.updateData();
}

