var path = require("path");

module.exports = {

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
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        publicPath: '/dist/'
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
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
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
    externals: [{
        // require("jquery") is external and available
        //  on the global var jQuery
        //  "jquery": "jQuery"
        'home': 'dist/home',
        'react-page': 'dist/react-page',
        'form': 'dist/form',
        'active-links': 'dist/active-links',
        'jmui-test': 'dist/jmui-test',
        'kitchensink': 'dist/kitchensink',
        'animation': 'dist/animation',
        'music': 'dist/music',
        'header': 'dist/header',
        'jquery': 'jquery',
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'react-addons-css-transition-group': {
            root: 'ReactCSSTransitionGroup',
            commonjs2: 'react-addons-css-transition-group',
            commonjs: 'react-addons-css-transition-group',
            amd: 'react-addons-css-transition-group'
        },
        'react-transition': {
            root: 'ReactTransition',
            commonjs2: 'react-transition',
            commonjs: 'react-transition',
            amd: 'react-transition'
        },
        'ReactRouter': 'ReactRouter',
        'History': 'History',
        'jmui': 'jmui',
        'jquery.jplayer': 'jplayer/jquery.jplayer',
        'css!jmui.ios.core': 'css!jmui.ios.core',
        'css!fonts/iconfont': 'css!fonts/iconfont'

    }]
};
