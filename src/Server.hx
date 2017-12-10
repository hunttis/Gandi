package ;
import js.Node;
import js.node.Http;
import js.node.Path;
import js.npm.Express;
import js.npm.express.*;

class Server {
  function new() {
    var app : Express = new Express();

    app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
    app.set('port', untyped(js.Node.process.env.PORT || 3000) );
    
    app.use(BodyParser.urlencoded());
    
    app.use(new Static(Path.join(Node.__dirname, 'public')));

    app.get('/', function (req, res) {
        res.sendfile(Node.__dirname + '/public/index.html');
    });

    app.use(function(req, res, next) {
        res.status(404).send('404');
    });

    app.listen(app.get('port'), function(){
        trace('Express server listening on port ' + app.get('port'));
    });
  }
  static public function main() {
    var main = new Server();
  }

}
