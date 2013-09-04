define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["mainlayout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"wrapper container\">\n  <header class=\"homepage\">\n    <div class=\"greetings\">\n      <img src=\"/img/me.jpg\" alt=\"A beautiful picture of me in a horse mask.\">\n\n      <div class=\"title\">\n        <h1>Hi there, my name is Ignacio Rivas.</h2>\n        <h1>I'm a Javascript developer.</h2>\n      </div>\n\n      <div class=\"subtitle\">\n        <p>I live in the beautiful city of Buenos Aires and I ship code at <a href=\"http://www.globant.com/\" target=\"_blank\">Globant</a></p>\n        <p>Take a look below to view some of my recent work!</p>\n      </div>\n\n      <a href=\"mailto:rivasign@gmail.com?subject=Hello Ignacio!\" class=\"button button-glow button-fat\">Contact me</a>\n    </div>\n  </header>\n\n  <article class=\"projects-widget\"></article>\n\n  <section class=\"followme row-fluid\">\n    <div class=\"tweet-container offset3 span6\">\n      <span class=\"tweet-message\">\n      </span>\n\n      <div class=\"tweet-button\">\n        <a href=\"https://twitter.com/sabarasaba\" target=\"_blank\" title=\"Follow me on twitter\" class=\"button button-blue\">Follow me on twitter</a>\n      </div>\n    </div>\n  </section>\n\n  <footer class=\"footer row-fluid\">\n    <div class=\"offset1 span2 social-icons\">\n      <ul class=\"unstyled inline\">\n        <li><a href=\"https://github.com/sabarasaba\" target=\"_blank\" title=\"My github account\"><i class=\"icon-github-alt\"></i></a></li>\n        <li><a href=\"http://ar.linkedin.com/in/rivasignacio\" target=\"_blank\" title=\"My linkedin account\"><i class=\"icon-linkedin\"></i></a></li>\n        <li><a href=\"https://twitter.com/sabarasaba\" target=\"_blank\" title=\"My twitter account\"><i class=\" icon-twitter\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"offset5 span3\">\n      <p>Copyright &copy; Ignacio Rivas 2013</p>\n    </div>\n  </footer>\n</div>\n<script type=\"text/javascript\">\n\n  var _gaq = _gaq || [];\n  _gaq.push(['_setAccount', 'UA-32825709-1']);\n  _gaq.push(['_setDomainName', 'ignaciorivas.me']);\n  _gaq.push(['_trackPageview']);\n\n  (function() {\n    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n  })();\n\n</script>";
  });

this["JST"]["projects.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n          <figure>\n            <img src=\"";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <figcaption>\n              <h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n              <span>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n              <a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Take a look</a>\n            </figcaption>\n          </figure>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"projects-container row-fluid\">\n  <div class=\"offset1 span10\">\n    <ul class=\"grid grid-effect\">\n      ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>";
  return buffer;
  });

return this["JST"];

});