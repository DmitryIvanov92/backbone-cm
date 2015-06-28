$(function() {	

	window.App = {
		Models: {},
		Collections: {},
		Views:{},
		Router:{}	
	};
	// шаблон
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	App.Router = Backbone.Router.extend({
		routes: {
			''              : 'index',
			'read'          : 'read',
			'page/:id'      : 'page',
			'post_*num'     : 'post',
			'search/:query' : 'search',
			'*other'             : 'default'

		},
		index: function() {
			console.log('Hi from index');
		},
		read: function() {
			console.log('Hi from read');
		},
		page: function(id) {
			console.log('Hi from page '+id);
		},
		post: function(num) {
			console.log('Hi from post '+num);
		},
		search: function(query) {
			console.log('You search \"'+query+'\"');
		},
		default: function(other) {
			console.log('Hi from default');
			alert('Error 404 \nPage '+other+' is not exists');
		}

	});

	new App.Router();
	Backbone.history.start();

}());