define(
  [
    'backbone',
    './modules/dashboard/dashboard.controller'
  ],

  function(Backbone, DashController) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

      routes : {
        '*path' : 'defaultAction'
      },

      initialize: function() {
        Backbone.history.start();
      },

      defaultAction: function() {
         DashController.load();
      }
    });

    return AppRouter;
  }
);