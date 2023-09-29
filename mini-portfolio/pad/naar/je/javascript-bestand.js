let persoon = {
    naam: "Suze Lempers",
    leeftijd: 16,
    hobbies: "Koken en Kpop albums kopen",
    begroeting: function()  {
        console.log("Hallo, mijn naam is " + this.naam + ". Ik ben" + this.leeftijd + "jaar oud en mijn hobbies zijn" + this.hobbies + ".")
    }
};

console.log(persoon.naam); // Output: Suze Lempers
console.log(persoon.leeftijd); // Output: 16
console.log(persoon.hobbies); // Output: Koken en Kpop albums kopen