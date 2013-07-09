define(
  [
    'backbone'
  ],

  function(Backbone) {
    'use strict';

    var ProjectsModel = Backbone.Model.extend({

      defaults: {
        name: '',
        description: '',
        image: '',
        url: ''
      }

    });

    return ProjectsModel;
  }

);