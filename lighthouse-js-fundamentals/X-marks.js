let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']  
const finalPosition = whatever =>{
  var y = 0
  var x = 0
  for (var i = 0 ; i < whatever.length ; i++){
    if (whatever[i] === 'north'){
      y++
    }
    if (whatever[i] === 'south'){
      y--
    }
    if (whatever[i] === 'east'){
      x++
    }
    if (whatever[i] === 'west'){
      x--
    }
  }
  return [x, y]
}

console.log(finalPosition(moves))