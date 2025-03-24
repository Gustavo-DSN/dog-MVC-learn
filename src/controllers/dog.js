const ServiceDog = require("../services/dog");

const dog = new ServiceDog();

class ControllersDog {
	PegarTodos(req, res) {
		try {
			const dogs = dog.PegarTodos();

			res.status(200).json({
				dogs,
			});
		} catch (error) {
			res.status(500).json({
				errorMessage: error.message,
			});
		}
	}

	PegarUm(req, res) {
		try {
			const index = req.params.id;

			const pickedDog = dog.PegarUm(index);

			res.status(200).json({
				pickedDog,
			});
		} catch (error) {
			res.status(500).json({
				errorMessage: error.message,
			});
		}
	}

	Adicionar(req, res) {
		try {
			const { name } = req.body;

			if (!nome) {
				throw new Error("Um nome deve ser passado !");
			}

			dog.Adicionar(name);

			res.status(201).json({
				message: "Adicionado com sucesso !",
			});
		} catch (error) {
			res.status(500).json({
				errorMessage: error.message,
			});
		}
	}

	Alterar(req, res) {
		try {
			const index = req.params.id;
			const { nome } = req.body;

			if (!nome) {
				throw new Error("Nome deve ser informado !");
			}

			dog.Alterar(index, nome);

			res.status(200).json({
				message: "Atualizado com sucesso !",
			});
		} catch (error) {
			res.status(500).json({
				errorMessage: error.message,
			});
		}
	}

	Deletar(req, res) {
		try {
			const index = req.params.id;

			if (!index) {
				throw new Error("O ID não está presente na requisição !");
			}

			dog.Deletar(index);

			res.status(200).json({
				message: "Deletado com sucesso !",
			});
		} catch (error) {
			res.status(500).json({
				errorMessage: error.message,
			});
		}
	}
}

module.exports = ControllersDog;
