
var middleware = {
	requireAuthentication: function(req, res, next){//route-level middleware
		console.log('private route hit!');
		next();
	},
	logger:function(req, res, next){
		console.log('Request: '+req.method + ' '+ req.originalUrl);
		next();
	}
};

module.exports = middleware;