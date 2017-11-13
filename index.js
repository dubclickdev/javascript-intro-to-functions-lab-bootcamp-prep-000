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
  if (lowercase) {
    return "I can\'t hear you!"
  }
  if (uppercase) {
    return "YES INDEED!"
  }
  if (mixedCase) {
    return "I love you, too."
  }
}
