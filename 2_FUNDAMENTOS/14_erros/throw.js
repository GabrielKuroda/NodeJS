const x = "10";

//Check if x é Num
if (!Number.isInteger(x)) {
  throw new Error("X não é número integer");
}

console.log("Continuando código...");
