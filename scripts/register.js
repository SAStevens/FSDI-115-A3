let petSalon = {
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        street:"Palomar",
        number: "500",
        zip: "92025"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

let c=0;

function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id=c++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function register(){

    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    
    petSalon.pets.push(newPet);

    displayInfo();
    displayPetCards();
    clearForm();
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputPhone.value = "";
}

function displayInfo(){
    document.getElementById("info").innerHTML="There are " + petSalon.pets.length + " pets in the salon";
}

function deletePet(id){

    console.log("deleting pet " + id);
    let deleteIndex;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){
            deleteIndex=i;
        }

    }
    document.getElementById(id).remove(); 

    petSalon.pets.splice(deleteIndex,1);

    displayInfo();
}

function init(){

    let scooby = new Pet("Scooby",5,"male","Dane","grooming","Shaggy","555-555-5555");
    let fido = new Pet("Fido",3,"male","Shepard","vaccine","Butch","444-444-4444");
    let lassie = new Pet("Lassie",6,"female","Collie","trim nails","Timmy","333-333-3333");

    petSalon.pets.push(scooby,fido,lassie);
    
    displayInfo();
    displayPetCards();
    
}

window.onload = init;