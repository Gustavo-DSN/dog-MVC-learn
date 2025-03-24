const RepositoryDog = require("../repository/dog");

const repo = new RepositoryDog();

class ServiceDog {
	PegarTodos() {
		return repo.pegarTodos();
	}

	PegarUm(index) {
		return repo.pegarUm(index);
	}

	Adicionar(dogName) {
		repo.Adicionar(dogName);
	}

	Alterar(index, dogName) {
		repo.Alterar(index, dogName);
	}

	Deletar(index) {
		repo.Deletar();
	}
}

module.exports = ServiceDog;
