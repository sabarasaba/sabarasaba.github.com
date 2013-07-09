define(
  [
    'jquery',
    'handlebars',
    './router',
    'underscore'
  ],
  function($, Handlebars, Router, _) {
    'use strict';

    var Application = {
      start: function() {
        new Router();
      }
    };

    return Application;
  }
);