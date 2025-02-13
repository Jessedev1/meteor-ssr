Package.describe({
  "summary": "Server Side Rendering for Meteor with Blaze",
  "version": "3.0.0",
  "git": "https://github.com/Jessedev1/meteor-ssr",
  "name": "jessedev:ssr"
});

Package.onUse(function(api) {
	configurePackage(api);
	api.export(['Template', 'SSR'], ['server']);
});

Package.onTest(function(api) {
	configurePackage(api);
	api.use([
		'tinytest',
	], 'server');

	api.addFiles([
		'test/base.js',
	], 'server');
});

function configurePackage(api) {
	api.versionsFrom('METEOR@3.0');
	api.use([
		'blaze@3.0.2',
		'spacebars@2.0.0',
		'spacebars-compiler@2.0.0',
		'mongo@2.1.0',
		'random@1.2.2'
	], 'server');
	api.addFiles([
		'lib/overrides.js',
		'lib/template.js',
		'lib/dynamic.js',
		'lib/api.js',
	], 'server');
}
