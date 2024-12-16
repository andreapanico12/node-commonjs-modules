function nameWriter(firstName, lastName){
  return `${firstName} ${lastName}`
}

console.log(nameWriter("Gianni", "Fantoni"));

module.exports = {
  nameWriter
}