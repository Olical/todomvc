requirejs.config({
	paths: {
		text: '../components/requirejs-text/text',
		Handlebars: '../components/handlebars.js/dist/handlebars',
		templates: '../templates',
		tarmac: '../components/tarmac/src'
	},
	shim: {
		Handlebars: {
			exports: 'Handlebars'
		}
	}
});

define([
	'routers/HashRouter',
	'controllers/TodoListController'
], function (HashRouter, TodoListController) {
	'use strict';

	var router = new HashRouter();

	router.setContextObject({
		elements: {
			app: document.getElementById('todoapp'),
			input: document.getElementById('new-todo'),
			list: document.getElementById('todo-list')
		}
	});

	router.addRoute('root', '', TodoListController, 'list-all');
	router.routeCurrentHash();
});
