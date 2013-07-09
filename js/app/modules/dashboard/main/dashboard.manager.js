define(
  [
    'container.view',
    'siutsur'
  ],

  function(ContainerView) {
    'use strict';

    var ViewManager = ContainerView.extend({

      // After the widget has been rendered, fetch my latest tweet.
      afterRender: function() {
        Siutsur.load('354584637009448960', function(tweets) {
          $('.tweet-message').empty().html(tweets[0].title.regular);
        }, function() {
          console.log('error loading tweets.');
        });
      }
    });

    return ViewManager;
  }
);