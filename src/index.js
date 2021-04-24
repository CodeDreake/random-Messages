const messages = [
  "Juan",
  "David",
  "Martha",
  "Nataly",
  "John",
  "Rocky"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()
    * messages.length)]
    console.log(message)
}

//Exportar como modulo
module.exports = { randomMsg }