#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Calculate your body mass index.");
let userAnswer = await inquirer.prompt([
    {
        name: "weight",
        message: "Enter your body weight in kg",
        type: "number"
    },
    {
        name: "height",
        message: "Enter your height in meter",
        type: "number"
    }
]);
let bodyWeight = userAnswer.weight;
let bodyHeight = userAnswer.height;
let bmiAns = bodyWeight / (bodyHeight * bodyHeight);
console.log(bmiAns);
if (bmiAns < 18.5) {
    console.log("Your body mass index categories is Underweight");
}
else if ((bmiAns < 18.6) || (bmiAns < 24.9)) {
    console.log("Your body mass index categories is Normal weight");
}
else if (bmiAns < 29.9) {
    console.log("Your body mass index categories is Overweight");
}
else if (bmiAns < 31) {
    console.log("Your body mass index categories is Obesity");
}
;
