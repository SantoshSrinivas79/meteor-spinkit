Package.describe({
  name: 'yogiben:spinkit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds the SpinKit CSS loader library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yogiben/meteor-spinkit',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('spinkit.css');
});