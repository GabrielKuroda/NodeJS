const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "name",
      message: "Insira seu nome: ",
    },
    {
      name: "age",
      message: "Insira sua idade: ",
    },
  ])
  .then((answer) => {
    console.log(
      chalk.bgYellow.black(`Nome: ${answer.name}, Idade: ${answer.age}`),
    );
  })
  .catch((err) => console.log(err));
