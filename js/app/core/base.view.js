define(
  [
    'underscore',
    'backbone',
    'templateregistry'
  ],
  function(_, Backbone, TemplateRegistry) {
    'use strict';

    var BaseView = Backbone.View.extend({

      initialize: function() {
        if (!this.template &&
          (!this.options.template || !_.isString(this.options.template))) {
          throw new Error('All views must specify their template at creation');
        } else {
          this.template = this.template ? this.template : this.options.template;
        }

        _.bindAll(this, 'beforeRender', 'render', 'afterRender');
        var that = this;
        this.render = _.wrap(this.render, function(render) {
            that.beforeRender();
            render();
            that.afterRender();
            return that;
        });
      },

      beforeRender: function() {

      },

      afterRender: function() {

      },

      render: function() {
        var data = this.options.data,
            templateFunction;

        if (this.model) {
          data = this.model.toJSON();
        }

        if (this.template in TemplateRegistry) {
          templateFunction = TemplateRegistry[this.template];
          this.$el.html(templateFunction(data));
        } else {
          this.$el.html(this.template);
        }
      },

      defaultAction: function() {
        this.render();
      },

      dispose: function() {
        this.$el.empty();

        if (this.model) {
          this.model.off();
        }
      }

    });

    return BaseView;
  }
);
