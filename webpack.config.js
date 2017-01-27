var path = require("path");

module.exports = {

    entry: {
        main: "./src/main.jsx",
        home: "./src/home.jsx",
        screen2: "./src/screen2.jsx",
        form: "./src/form.jsx",
        'active-links': "./src/active-links.jsx",
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
        'react': 'react',
        'react-dom': 'react-dom',
        'ReactRouter': 'ReactRouter',
        'history': 'history',

    }]
};
