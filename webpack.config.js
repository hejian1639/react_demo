var path = require("path");

module.exports = {

    entry: {
        main: "./src/main.jsx",
        home: "./src/home/index.jsx",
        screen2: "./src/screen2.jsx",
        form: "./src/form.jsx",
        'active-links': "./src/active-links.jsx",
        'jmui-test': "./src/jmui-test.jsx",
        'kitchensink': "./src/kitchensink/routes.js",
        'animation': "./src/animation/index.jsx",
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
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.woff2(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.otf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[ext]' },
            { test: /\.(png|jpg)$/, loader: 'file?name=[name].[ext]' },
            { test: /\.(gif)$/, loader: 'url-loader?limit=4096&name=[name].[ext]' }
    ]
    },
    externals: [{
        // require("jquery") is external and available
        //  on the global var jQuery
        //  "jquery": "jQuery"
        'dist/home': 'dist/home',
        'dist/screen2': 'dist/screen2',
        'dist/form': 'dist/form',
        'dist/active-links': 'dist/active-links',
        'dist/jmui-test': 'dist/jmui-test',
        'dist/kitchensink': 'dist/kitchensink',
        'dist/animation': 'dist/animation',
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
        'css!jmui.ios.core': 'css!jmui.ios.core',
        'css!fonts/iconfont': 'css!fonts/iconfont'

    }]
};
