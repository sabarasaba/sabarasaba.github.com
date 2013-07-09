/*!
 * Siutsur Twitter Framework
 * Copyright (c) Lauri Borodkin
 * Version: 0.1
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery
 *
 * Usage: Siutsur.load(id, success callback, error callback);
 */
 
var Siutsur = function() {
  return {
    load : function(id, c, ec) {
      this.c = c;
      this.ec = ec;
      $('<script />', {
        src: '//cdn.syndication.twimg.com/widgets/timelines/'+id+'?&lang=en&callback=Siutsur.callback&suppress_response_codes=true&_='+ Math.random()
      }).appendTo(document.head);
    },
    callback: function(r) {
      if (r.headers && r.headers.status == 200) {
        var $b = $(r.body),
            a = [],
            $s = $b.find('>.stream>.h-feed>li.h-entry');
            
        $.each($s, function(k, t) {
          var $t = $(t),
              $p = $t.children('.permalink'),
              $u = $t.find('>.p-author>.profile'),
              $a = $u.children('.avatar'),
              $c = $t.find('>.e-entry-content>.e-entry-title');
 
          var o = {
            'id': parseInt($t.data('tweet-id'),10),
            'permalink': $p.attr('href'),
            'published': {
              'datetime': $p.data('datetime'),
              'label': $p.text(),
              'title': $p.children('time').attr('title')
            },
            'title': {
              'regular': $c.html(),
              'plain': $c.text()
            },
            'user': {
              'avatar': {
                'bigger': $a.attr('data-src-2x'),
                'normal': $a.attr('src')
              },
              'link': $u.attr('href'),
              'name': $u.find('>.full-name>.p-name').text(),
              'nickname': $u.find('>.p-nickname').text()
            }
          };
          a.push(o);
        });
        if (this.c) { this.c.call(this, a); }
      }
      else {
        if (this.ec) { this.ec.call(this); }
      }
    }
  };
}();