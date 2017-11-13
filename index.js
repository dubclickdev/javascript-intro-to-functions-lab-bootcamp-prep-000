function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  var lowercase = "hello!"
  lowercase.toLowerCase() === lowercase
  var mixedCase = "Hi there!"
  mixedCase.toLowerCase() === mixedCase
  mixedCase.toUpperCase() === mixedCase
  if (string.toLowerCase()) {
    return "I can\'t hear you!"
  }
  if (string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string.mixedCase()) {
    return "I love you, too."
  }
}
