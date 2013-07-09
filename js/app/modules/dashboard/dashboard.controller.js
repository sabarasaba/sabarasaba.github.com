define(
  [
    './main/dashboard.manager',
    'app/widgets/projects/projects.widget'
  ],

  function(DashManager, ProjectsWidget) {
    'use strict';

    var DashController = {

      load: function() {
        var dashManager = new DashManager({
          el: 'body',
          template: 'mainlayout.hbs'
        });

        dashManager.addView('.projects-widget', new ProjectsWidget({
          el: '.projects-widget'
        }));

        dashManager.render();
      }
    };

    return DashController;
});
