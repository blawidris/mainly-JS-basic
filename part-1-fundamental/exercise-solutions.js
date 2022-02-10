/*
 * Excercise 1 BMI (Body Mass Index)
 *
 */

/*
 * declare variable for each user height and mass
 *assign value to declare variable
 */
var markMass = 85, //kg
  markHeight = 5.5; // m
var johnMass = 65, //kg
  johnHeight = 4.5; //m

// calculate each persons' bodyMass
var markBodyMassIndex = markMass / (markHeight * markHeight);
var johnBodyMassIndex = johnMass / (johnHeight * johnHeight);

var compareBothBMI = markBodyMassIndex > johnBodyMassIndex;
console.log(
  "Is Mark's (" +
    Math.floor(markBodyMassIndex) +
    ") BMI higher than John's? (" +
    Math.floor(johnBodyMassIndex) +
    ")" +
    compareBothBMI
);
