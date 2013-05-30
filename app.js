/* Module dependencies. */
var express = require('express');

var app = express();

app.configure(function(){
  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.get('/', function(req, res){
  res.render("index.html");
});

app.listen(8081);
