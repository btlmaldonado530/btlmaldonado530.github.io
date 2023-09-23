var treasureLocation = Math.floor(Math.random() * 9)
console.log("treasure", treasureLocation)
var bombLocation = Math.floor(Math.random() * 9)
console.log("bomb", bombLocation)

if (treasureLocation === bombLocation) {
  bombLocation = Math.floor(Math.random() * 9)
}

const treasure = (location) => {
  if (location === treasureLocation) {
    document.getElementById(location).innerHTML = "🪙"
    document.getElementById("outcome").innerHTML = "YOU WIN!"

  }
  else if (location === bombLocation) {
    return document.getElementById(location).innerHTML = "❌"

  }
  else {
    return document.getElementById(location).innerHTML = "🏴‍☠️"
  }
}
