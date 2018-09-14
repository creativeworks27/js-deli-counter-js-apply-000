function takeANumber(katzDeliLine, name) {
 if (katzDeliLine.length > 0)
  katzDeliLine.push(name[0]);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  return(katzDeliLine[0])
}