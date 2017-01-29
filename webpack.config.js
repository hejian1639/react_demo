var path = require("path");

module.exports = {

    entry: {
        main: "./src/main.jsx",
        home: "./src/home.jsx",
        screen2: "./src/screen2.jsx",
        form: "./src/form.jsx",
        'active-links': "./src/active-links.jsx",
        'jmui-test': "./src/jmui-test.jsx",
        'kitchensink': "./src/kitchensink/index.js",
        'animation': "./src/animation.jsx",
    },
    output: {
        path: path.join(__dirname, "app"),
        filename: "[name].js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
    },
    externals: [{
        // require("jquery") is external and available
        //  on the global var jQuery
        //  "jquery": "jQuery"
        'app/home': 'app/home',
        'app/screen2': 'app/screen2',
        'app/form': 'app/form',
        'app/active-links': 'app/active-links',
        'app/jmui-test': 'app/jmui-test',
        'app/kitchensink': 'app/kitchensink',
        'app/animation': 'app/animation',
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
        'jmui': 'jmui',
        'css!jmui.ios.core': 'css!jmui.ios.core'

    }]
};
