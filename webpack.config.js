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
        'react': 'react',
        'react-dom': 'react-dom',
        'react-addons-css-transition-group': 'react-addons-css-transition-group',
        'ReactRouter': 'ReactRouter',
        'jmui': 'jmui',
        'css!jmui.ios.core': 'css!jmui.ios.core'

    }]
};
