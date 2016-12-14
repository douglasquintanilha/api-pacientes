var api = {};

var pacientes = [
					{
						nome: "Douglas",
						peso: 80,
						altura: 1.75,
						gordura: 24
					},
					{
						nome: "Flavio",
						peso: 70,
						altura: 1.70,
						gordura: 17
					}

				];

api.lista = function(req, res) {

	res.json(pacientes);

};

module.exports = api;
