npm init -fy
touch serve.js
npm install --save express
npm install --save materialize-css
mkdir public
cd public/
mkdir js css images icons
touch index.html
# let's echo the contents of the basic html structure into the index.html file
# link jquery, materialize-js, materialize-css
# link materialize js
# link materialize css
echo "<html>" > index.html
echo "  <head>" >> index.html
echo '    <meta charset="utf-8">' >> index.html
echo '    <script src="js/jquery.js" type="text/javascript"></script>' >> index.html
echo '    <script src="js/materialize.js" type="text/javascript"></script>' >> index.html
echo '    <link rel="stylesheet" href="css/materialize.css">' >> index.html
echo "  </head>" >> index.html
echo "  <body>" >> index.html
echo '    <div class="container">' >> index.html
echo '      <div class="row">' >> index.html
echo '        <div class="col s12">' >> index.html
echo '          <h1>the spectacle before us was indeed sublime</h1>' >> index.html
echo '        </div>' >> index.html
echo '      </div>' >> index.html
echo '    </div>' >> index.html
echo "  </body>" >> index.html
echo "</html>" >> index.html
cd ..
cp node_modules/jquery/dist/jquery.js public/js/
cp node_modules/materialize-css/dist/css/materialize.css public/css/
cp node_modules/materialize-css/dist/js/materialize.js public/js/
cp -r node_modules/materialize-css/dist/fonts public/
echo "var express = require('express')" > serve.js
echo "var app = express()" >> serve.js
echo "let port = 8080" >> serve.js
echo "app.use(express.static('public'))" >> serve.js
echo "app.get('/', function(req, res){" >> serve.js
echo "  console.log('got request at /')" >> serve.js
echo "})" >> serve.js
echo "app.listen(port, function(){" >> serve.js
echo "  console.log('listening on port', port)" >> serve.js
echo "})" >> serve.js
