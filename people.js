const { nameWriter } = require("./names");
const { hobbiesList } = require("./hobbies");

function createPerson(){
  return {
    name : nameWriter("Gianni", "Malavita"),
    hobbies : hobbiesList("gioco d'azzardo","tiro a segno","guida pericolosa")
  }
}

console.log(createPerson())