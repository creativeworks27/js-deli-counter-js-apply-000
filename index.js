function takeANumber(katzDeliLine, name) {
 if (katzDeliLine.length > 1)
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}