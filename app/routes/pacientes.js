module.exports = function(app) {

	var api = app.api.pacientes;

	app.route('/pacientes/')
		.get(api.lista);
};
