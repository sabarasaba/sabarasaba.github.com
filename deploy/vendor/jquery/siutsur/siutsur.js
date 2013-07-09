/*!
 * Siutsur Twitter Framework
 * Copyright (c) Lauri Borodkin
 * Version: 0.1
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery
 *
 * Usage: Siutsur.load(id, success callback, error callback);
 */

var Siutsur=function(){return{load:function(e,t,n){this.c=t,this.ec=n,$("<script />",{src:"//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=Siutsur.callback&suppress_response_codes=true&_="+Math.random()}).appendTo(document.head)},callback:function(e){if(e.headers&&e.headers.status==200){var t=$(e.body),n=[],r=t.find(">.stream>.h-feed>li.h-entry");$.each(r,function(e,t){var r=$(t),i=r.children(".permalink"),s=r.find(">.p-author>.profile"),o=s.children(".avatar"),u=r.find(">.e-entry-content>.e-entry-title"),f={id:parseInt(r.data("tweet-id"),10),permalink:i.attr("href"),published:{datetime:i.data("datetime"),label:i.text(),title:i.children("time").attr("title")},title:{regular:u.html(),plain:u.text()},user:{avatar:{bigger:o.attr("data-src-2x"),normal:o.attr("src")},link:s.attr("href"),name:s.find(">.full-name>.p-name").text(),nickname:s.find(">.p-nickname").text()}};n.push(f)}),this.c&&this.c.call(this,n)}else this.ec&&this.ec.call(this)}}}();