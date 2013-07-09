require.config({
  //path aliases for loaded scripts
  paths: {
    'backbone' : 'vendor/backbone/backbone',
    'jquery' : 'vendor/jquery/jquery-1.9.1',
    'underscore' : 'vendor/underscore/lodash',
    'handlebars' : 'vendor/handlebars/handlebars',
    'siutsur' : 'vendor/jquery/siutsur/siutsur',
    'templateregistry' : 'app/templates',
    'base.view' : 'app/core/base.view',
    'container.view': 'app/core/container.view'
  },
  //load script's dependencies in correct order &
  //wraps non-AMD scripts into AMD-modules
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'siutsur': {
      deps: ['jquery'],
      exports: 'siutsur'
    },
    'handlebars': {
      exports : 'Handlebars'
    }
  },
  waitSeconds: 30
});

require(
  [
    'app/utils/debug'
  ],
  function(debug) {
    'use strict';

    //Last line of defense. Log errors caused by unexpected conditions
    window.onerror = function(message, url, linenumber) {
      window.debug.error('JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url);
    };

    require(
      [
        'app/application'
      ],
      function(Application) {
        Application.start();
      });
  }
);
