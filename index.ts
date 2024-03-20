import inquirer from "inquirer";

// Asking Question from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number" , name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform operations", 
        type: "list",
        name: "operator",
        choices: ["Addition", "Suctractions", "Multiplication", "Division"],
    },
]);
console.log(answers);

// Conditional statements if-Else
if(answers.operator === "Addition"){
console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else {
 console.log("Invalid Input")
}