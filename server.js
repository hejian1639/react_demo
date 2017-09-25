import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.babel';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))
app.use('/lib', express.static(path.join(__dirname, './lib')))
// app.use(express.static(__dirname));

const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.status(404)
                .send('Server.js > 404 - Page Not Found');
            return;
        }
        // console.log("异步读取: " + data);
        res.status(200)
            .send(data.toString());
    });

});

// app.get('/favicon.ico', function(req, res) {
//     fs.readFile('favicon.ico', function(err, data) {
//         if (err) {
//             res.status(404)
//                 .send('Server.js > 404 - Page Not Found');
//             return;
//         }
//         res.status(200)
//             .send(data.toString());
//     });

// });

// app.get('/manifest.json', function(req, res) {
//     fs.readFile('manifest.json', function(err, data) {
//         if (err) {
//             res.status(404)
//                 .send('Server.js > 404 - Page Not Found');
//             return;
//         }
//         res.status(200)
//             .send(data.toString());
//     });

// });

const NAV_LINKS1 = {
    react_page: {
        link: '/react_page',
        title: 'Go to React Page'
    },
    'form': {
        link: '/form',
        title: 'Go to Form Page'
    },
    jmui: {
        link: '/jmui',
        title: 'Go to JMUI'
    },
    kitchensink: {
        link: '/kitchensink',
        title: 'Go to kitchensink'
    },
    animation: {
        link: '/animation',
        title: 'Go to Animation Page'
    },
    music: {
        link: '/music',
        title: 'Go to Music Page'
    },
    starter_template: {
        link: '/starter_template',
        title: 'Go to Starter Template Page'
    },

    bootstrap_react: {
        link: '/bootstrap_react',
        title: 'Go to React Bootstrap Page'
    },

    todos: {
        link: '/todos',
        title: 'Go to Todo list'
    },
    typescript: {
        link: '/typescript',
        title: 'Go to Typescript'
    },
    '2d-scroll': {
        link: '/2d-scroll',
        title: 'Go to 2D Scroll'
    },
    echart_test: {
        link: '/echart_test',
        title: 'Go to eChart Test'
    },
    video_test: {
        link: '/video_test',
        title: 'Go to Video Test'
    },
    react_ui_test: {
        link: '/react_ui_test',
        title: 'Go to React UI Test'
    },

    ant: {
        link: '/ant',
        title: 'Go to Ant Design Test'
    },

};

const NAV_LINKS2 = {
    bootstrap_popup: {
        link: '/bootstrap_popup',
        title: 'Go to Bootstrap Popup Page'
    },

    react_page: {
        link: '/react_page',
        title: 'Go to React Page'
    },
    'form': {
        link: '/form',
        title: 'Go to Form Page'
    },
    jmui: {
        link: '/jmui',
        title: 'Go to JMUI'
    },
    kitchensink: {
        link: '/kitchensink',
        title: 'Go to kitchensink'
    },
    animation: {
        link: '/animation',
        title: 'Go to Animation Page'
    },
    music: {
        link: '/music',
        title: 'Go to Music Page'
    },
    starter_template: {
        link: '/starter_template',
        title: 'Go to Starter Template Page'
    },

    bootstrap_react: {
        link: '/bootstrap_react',
        title: 'Go to React Bootstrap Page'
    },

    todos: {
        link: '/todos',
        title: 'Go to Todo list'
    },
    mobx_todos: {
        link: '/mobx_todos',
        title: 'Go to MobX Todo list'
    },
    responsive: {
        link: '/responsive',
        title: 'Go to Responsive Page'
    },
};

app.get('/service/home_list1', function(req, res) {
    res.status(200)
        .send(JSON.stringify(NAV_LINKS1));
});

app.get('/service/home_list2', function(req, res) {
    res.status(200)
        .send(JSON.stringify(NAV_LINKS2));
});

app.get('*', function(req, res) {
    // res.status(404).send('Server.js > 404 - Page Not Found');
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.status(404)
                .send('Server.js > 404 - Page Not Found');
            return;
        }
        // console.log("异步读取: " + data);
        res.status(200)
            .send(data.toString());
    });
});

app.use((err, req, res, next) => {
    console.error("Error on request %s %s", req.method, req.url);
    console.error(err.stack);
    res.status(500)
        .send("Server error");
});

process.on('uncaughtException', evt => {
    console.log('uncaughtException: ', evt);
});

app.listen(3001, function() {
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
