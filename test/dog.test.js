const { describe, expect, it } = require("@jest/globals");
const ServicesDog = require("../src/services/dog");

describe("Teste DOG MVC", () => {
	const service = new ServicesDog();

	it("Adicionar nome na lista de cachorros", () => {
		const nome = "Fred";

		service.Adicionar(nome);

		const nomes = service.PegarTodos();

		console.log(nomes);

		expect(nomes[nomes.length - 1]).toBe(nome);
	});

	it("Atualizar um nome na lista", () => {
		const nome = "Hulk";
		const index = 2;

		service.Alterar(index, nome);

		const nomes = service.PegarTodos();

		console.log(nomes);

		expect(nomes[index]).toBe(nome);
	});

	it("Deletar um nome dentro da lista", () => {
		const index = 0;

		const nomeAntes = service.PegarUm(index);

		service.Deletar(index);

		const nomeDepois = service.PegarUm(index);

		expect(nomeAntes).not.toBe(nomeDepois);
	});
});
