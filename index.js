var katzDeliLine =[]

  function takeANumber(deliLine, newPerson){

deliLine.push(newPerson)

return "Welcome, " + newPerson + ". You are number "+ deliLine.length + " in line."
}
function nowServing(deliLine){

  if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}else {
  return "Currently serving "+ deliLine.shift() + "."
}


  }
