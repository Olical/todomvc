define([
	'Handlebars'
], function (Handlebars) {
	'use strict';

	return {
		load: function (name, req, onLoad) {
			var url = 'text!' + name + '.hbs';
			var compiledTemplate;

			req([url], function (template) {
				compiledTemplate = Handlebars.compile(template);
				onLoad(compiledTemplate);
			});
		}
	};
});
