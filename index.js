const express = require("express");
const routes = require("./src/routes/dog");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
	console.log("Rodando o servidor na porta 3000");
});
