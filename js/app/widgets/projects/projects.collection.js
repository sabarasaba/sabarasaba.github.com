define(
  [
    'backbone',
    './projects.model'
  ],
  function(Backbone, ProjectsModel) {
    'use strict';

    var ProjectsCollection = Backbone.Collection.extend({

      model: ProjectsModel,

      url: '/deploy/site-data/projects.json'

    });

    return ProjectsCollection;
  }
);