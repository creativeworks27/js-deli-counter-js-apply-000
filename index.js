var katzDeliLine = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine, name) {

 if (katzDeliLine.length > 0)
 
  katzDeliLine.push(name);
  
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0)
  
  return("There is nobody waiting to be served!");
}
function currentLine(katzDeliLine) {
  
  
  
}