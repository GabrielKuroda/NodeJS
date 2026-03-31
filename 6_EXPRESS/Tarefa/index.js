const express = require("express");
const app = express();
const port = 5000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

const second = require("./secondPage");

// arquivos estáticos
app.use(express.static("public"));

app.use("/second", second);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`);
});
