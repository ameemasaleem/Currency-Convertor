// "Amema"
// 25
// true
// let myname = "Ameema"
// let std1 = "Sakina"
// let std2 = "Naseem"
// let std3 = "Saleem"
// let std1age = 20
// let std2age = 35
// let std3age = 50
// let students = ["Ali", "Ashar", "Naiyma"]
// let student_data: any = {
//     name: "Ameema",
//     age: 25,
//     rollno: "abc123",
//     address: "karachi",
// }
// student_data.name
// student_data.age
// student_data["name"]
// student_data["age"]
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 7.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
// console.log(user_answer)
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD Base currency // 4
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(convertedAmount);
// let property: any = "age"
// console.log(student_data["property"]);
