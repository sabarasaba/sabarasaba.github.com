define(
  [
    'underscore',
    'base.view',
    'templateregistry',
    './projects.collection'
  ],
  function(_, BaseView, TemplateRegistry, ProjectsCollection) {
    'use strict';

    var ProjectsWidget = BaseView.extend({

      template: 'projects.hbs',

      initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);

        this.model = new ProjectsCollection();
      },

      defaultAction: function() {
        var that = this;

        this.model.fetch()
          .done(function() {
            that.render();
          })
          .fail(function() {
            debug.info('There was a problem fetching the data.');
          });
      }

    });

    return ProjectsWidget;
  }
);
