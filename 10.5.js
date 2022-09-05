/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }*/

  let createInstructor = (firstName, lastName) => {
    return{
    firstName,
    lastName,
  };
  }

/*  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"*/

let instructor = (firstName, favoriteNumber) => {
    return {firstName,
        [favoriteNumber]: 'That is my favorite!'
    }
}

/*var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName " + "says bye!";
    }
  }*/

let instructorGreeting = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + '' + "says bye!;"
    }
}

let createAnimal = (species, verb, noise) => {
    return {
        species,
        verb,
        noise
    }

}