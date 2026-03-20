const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabéns!"));
} else {
  console.log(chalk.bgRed.black("Reprovado"));
}
