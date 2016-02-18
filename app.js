var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

app.get('/index', function (req, res) {
  res.render('index', {
    test: 'Hello world'
  });
});

var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
