const x = 10;
const y = "Algum Texto";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressoes
console.count(`O Valor de x é :${x}, contagem`);
console.count(`O Valor de x é :${x}, contagem`);
console.count(`O Valor de x é :${x}, contagem`);
console.count(`O Valor de x é :${x}, contagem`);

//Var entre string
console.log("O valor de y é: %s", y);

// Limpar console
setTimeout(() => {
  console.clear();
}, 2000);
