(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['peopleCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

<<<<<<< HEAD
  return "<div class=\"peopleCard\">\r\n  <p>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Year: "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Email: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Game: "
    + alias4(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"game","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Username: "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['homeCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"game-card\">\r\n  <div>\r\n    <a href=\"/players/"
    + alias4(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team","hash":{},"data":data}) : helper)))
    + "\"><img class=\"game-icon\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" /></a>\r\n  </div>\r\n</section>\r\n";
=======
  return "<div class=\"peopleCard\">\r\n  <p>Game: "
    + alias4(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"game","hash":{},"data":data}) : helper)))
    + "</p>\r\n  <p>Username: "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div> \r\n";
>>>>>>> 3884a1632f685f292d695c1231bcdee4b7b830be
},"useData":true});
})();