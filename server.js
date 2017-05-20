import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from'./webpack.config.babel';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))
app.use('/lib', express.static(path.join(__dirname, './lib')))
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  fs.readFile('index.html', function (err, data) {
    if (err) {
      res.status(404).send('Server.js > 404 - Page Not Found');
      return;
    }
    console.log("异步读取: " + data);
  	res.status(200).send(data.toString());
  });

});

app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
});

app.use((err, req, res, next) => {
	console.error("Error on request %s %s", req.method, req.url);
	console.error(err.stack);
	res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
	console.log('uncaughtException: ', evt);
});

app.listen(3001, function(){
	console.log('Listening on port 3001');
});

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: false,
//   historyApiFallback: true
// }).listen(3001, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Listening at localhost:3000');
// });
