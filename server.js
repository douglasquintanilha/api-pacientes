var http = require('http');
var app = require('./config/express');

app.set('port', (process.env.PORT || 3000));

http.createServer(app).listen(app.get('port'), function() {
	console.log('Servidor iniciado');
});
 
