const banco = new Array("BOB", "Thor", "Paschal");

class RepositoryDog {
	pegarTodos() {
		return banco;
	}

	pegarUm(index) {
		return banco[index];
	}

	Adicionar(dogName) {
		banco.push(dogName);
	}

	Alterar(index, dogName) {
		banco[index] = dogName;
	}

	Deletar(index) {
		banco.splice(index, 1);
	}
}

module.exports = RepositoryDog;
