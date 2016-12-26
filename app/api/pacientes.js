var api = {};

var pacientes = [
					{
						nome: "Jessica",
						peso: 44,
						altura: 1.54,
						gordura: 17
					},
					{
						nome: "Flavio",
						peso: 70,
						altura: 1.70,
						gordura: 17
					},
					{
						nome: "Teresa",
						peso: 60,
						altura: 1.70,
						gordura: 13
					},
					{
						nome: "Marina",
						peso: 75,
						altura: 1.70,
						gordura: 26
					},
					{
						nome: "Lucas",
						peso: 23,
						altura: 1.25,
						gordura: 10
					},
					{
						nome: "Stevie",
						peso: 73,
						altura: 1.75,
						gordura: 10
					},
					{
						nome: "Daniel",
						peso: 78,
						altura: 1.85,
						gordura: 19
					}		

				];

api.lista = function(req, res) {

	res.json(pacientes);

};

module.exports = api;
