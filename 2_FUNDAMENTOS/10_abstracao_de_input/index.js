const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira Nota",
    },
    {
      name: "p2",
      message: "Qual a segunda Nota",
    },
  ])
  .then((answer) => {
    console.log(answer);
    const media = (parseInt(answer.p1) + parseInt(answer.p2)) / 2;
    console.log(`Média: ${media}`);
  })
  .catch((err) => console.log(err));
