var path = require("path");
var precss = require('precss'); // 实现类Sass的功能，变量，嵌套，mixins
var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var baseLibUrl = '';
var baseAppUrl = 'dist/';

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        main: "./src/main.jsx",
        home: "./src/home/index.jsx",
        'react-page': "./src/react_page/index.jsx",
        form: "./src/form.jsx",
        'active-links': "./src/active-links.jsx",
        'jmui-test': "./src/jmui-test.jsx",
        'kitchensink': "./src/kitchensink/routes.jsx",
        'animation': "./src/animation/index.jsx",
        'music': "./src/music/index.jsx",
        'header': "./src/header/index.jsx",
        'starter-template': "./src/starter_template/index.jsx",
        'bootstrap-react': "./src/bootstrap_react/index.jsx",

    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        publicPath: baseAppUrl
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0']
                }
      },
            { test: /\.css$/, loader: 'style-loader!css-loader?modules!postcss-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.woff2(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.otf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.(png|jpg)$/, loader: 'file?name=[name].[ext]' },
            { test: /\.(gif)$/, loader: 'url-loader?limit=4096&name=[name].[ext]' },
            { test: /\.swf$/, loader: 'file?name=[name].[ext]' },
            { test: /\.m4a$/, loader: 'file?name=[name].[ext]' },
            { test: /\.ogg$/, loader: 'file?name=[name].[ext]' },
    ]
    },
    postcss: function() { // postcss 插件
        return [precss, autoprefixer];
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

    }],
    plugins: [
        new ProgressBarPlugin()
    ]
};
