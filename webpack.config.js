var path = require("path");
var precss = require('precss'); // 实现类Sass的功能，变量，嵌套，mixins
var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var baseLibUrl = '';
var baseAppUrl = 'dist/';

module.exports = {
    devtool: 'source-map',

    entry: {
        main: "./src/main.jsx",
        home: "./src/home",
        'react-page': "./src/react_page",
        form: "./src/form.jsx",
        'active-links': "./src/active-links.jsx",
        'jmui-test': "./src/jmui-test.jsx",
        'kitchensink': "./src/kitchensink",
        'animation': "./src/animation",
        'music': "./src/music",
        'header': "./src/header",
        'starter-template': "./src/starter_template",
        'bootstrap-react': "./src/bootstrap_react",
        'bootstrap-popup': "./src/bootstrap_popup",
        'todos': "./src/todos",
        'mobx-todos': "./src/mobx",

    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-0', 'react'],
                        plugins: ["transform-decorators-legacy"]
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    { loader: 'postcss-loader', options: { plugins: () => [require('precss'), require('autoprefixer')] } }
                ]
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: '[name].[ext]'
                    },
                }
            },
            {
                test: /\.(eot|ttf|svg|m4a|ogg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    },
                },
            },
        ]
    },

    externals: [{
        // require("jquery") is external and available
        //  on the global var jQuery
        //  "jquery": "jQuery"
        'home': baseAppUrl + 'home',
        'react-page': baseAppUrl + 'react-page',
        'form': baseAppUrl + 'form',
        'active-links': baseAppUrl + 'active-links',
        'jmui-test': baseAppUrl + 'jmui-test',
        'kitchensink': baseAppUrl + 'kitchensink',
        'animation': baseAppUrl + 'animation',
        'music': baseAppUrl + 'music',
        'header': baseAppUrl + 'header',
        'starter-template': baseAppUrl + 'starter-template',
        'bootstrap-react': baseAppUrl + 'bootstrap-react',
        'bootstrap-popup': baseAppUrl + 'bootstrap-popup',
        'mobx-todos': baseAppUrl + 'mobx-todos',
        'jquery': baseLibUrl + 'jquery',
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: baseLibUrl + 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: baseLibUrl + 'react-dom'
        },
        'react-addons-css-transition-group': {
            root: 'ReactCSSTransitionGroup',
            commonjs2: 'react-addons-css-transition-group',
            commonjs: 'react-addons-css-transition-group',
            amd: baseLibUrl + 'react-addons-css-transition-group'
        },
        'react-transition': {
            root: 'ReactTransition',
            commonjs2: 'react-transition',
            commonjs: 'react-transition',
            amd: baseLibUrl + 'react-transition'
        },
        'redux': baseLibUrl + 'redux',
        'react-redux': baseLibUrl + 'react-redux',
        'ReactRouter': baseLibUrl + 'ReactRouter',
        'History': baseLibUrl + 'History',
        'jmui': baseLibUrl + 'jmui',
        'jquery.jplayer': baseLibUrl + 'jplayer/jquery.jplayer',
        'css!jmui.ios.core': 'css!' + baseLibUrl + 'jmui.ios.core',
        'css!fonts/iconfont': 'css!' + baseLibUrl + 'fonts/iconfont',
        'bootstrap': baseLibUrl + 'bootstrap',
        'css!bootstrap': 'css!' + baseLibUrl + 'bootstrap',
        'css!bootstrap-theme': 'css!' + baseLibUrl + 'bootstrap-theme',
        'react-bootstrap': baseLibUrl + 'react-bootstrap',
        'css!todomvc-app-css': 'css!' + baseLibUrl + 'todomvc-app-css/index.css',
        'css!todomvc-common': 'css!' + baseLibUrl + 'todomvc-common/base.css',
        'todomvc-common': baseLibUrl + 'todomvc-common/base',
        'mobx': baseLibUrl + 'mobx',
        'mobx-react': baseLibUrl + 'mobx-react/index',
        'mobx-react-devtools': baseLibUrl + 'mobx-react-devtools/index',
        'react-intl': baseLibUrl + 'react-intl',

    }],
    plugins: [
        new ProgressBarPlugin()
    ]
};
