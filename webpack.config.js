var path = require("path");
var precss = require('precss'); // 实现类Sass的功能，变量，嵌套，mixins
var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var fs = require('fs')

var baseLibUrl = '';
var baseAppUrl = 'dist/';

var babelOptions = {
    "presets": [
    "react",
    [
      "es2015",
        {
            "modules": false
        }
    ],
    "es2016"
  ]
};

var rootDir = __dirname + '/src';
var entry = fs.readdirSync(rootDir)
    .reduce(function(entries, dir) {
        if (fs.statSync(path.join(rootDir, dir))
            .isDirectory()) {
            var entryFile = path.join(rootDir, dir, 'index.js')
            if (fs.existsSync(entryFile)) {
                entries[dir] = entryFile;
            }
        }

        return entries
    }, {
        main: "./src/main.jsx",
        'active-links': "./src/active-links.jsx",
        'jmui-test': "./src/jmui-test.jsx",
        form: "./src/form.jsx",
        'react-flux-babel-karma': "./src/react-flux-babel-karma/main.tsx",
    });


var externals = fs.readdirSync(rootDir)
    .reduce(function(entries, dir) {
        if (fs.statSync(path.join(rootDir, dir))
            .isDirectory()) {
            var entryFile = path.join(rootDir, dir, 'index.js')
            if (fs.existsSync(entryFile)) {
                entries[dir] = baseAppUrl + dir;
            }
        }

        return entries
    }, {
        'active-links': baseAppUrl + "active-links",
        'jmui-test': baseAppUrl + "jmui-test",
        'form': baseAppUrl + "form",
        'react-flux-babel-karma': baseAppUrl + "react-flux-babel-karma",
        'jquery.jplayer': 'jplayer/jquery.jplayer',
        'css!fonts/iconfont': 'css!' + 'fonts/iconfont',
        'css!todomvc-app-css': 'css!' + 'todomvc-app-css/index.css',
        'css!todomvc-common': 'css!' + 'todomvc-common/base.css',
    });

var rootDir = './lib';

function delJSExtension(str) {
    var reg = /.js$/;
    return str.replace(reg, '');
}

function delCSSExtension(str) {
    var reg = /.css$/;
    return str.replace(reg, '');
}
externals = fs.readdirSync(rootDir)
    .reduce(function(entries, dir) {
        if (fs.statSync(path.join(rootDir, dir))
            .isFile()) {
            if (dir.match(/.js$/)) {
                dir = delJSExtension(dir);
                entries[dir] = dir;

            } else if (dir.match(/.css$/)) {
                dir = 'css!' + delCSSExtension(dir);
                entries[dir] = dir;

            }
        }

        return entries
    }, externals);

// entry = Object.assign(entry, {
//         main: "./src/main.jsx",
//         'active-links': "./src/active-links.jsx",
//         'jmui-test': "./src/jmui-test.jsx",
//         form: "./src/form.jsx",
//         'react-flux-babel-karma': "./src/react-flux-babel-karma/main.tsx",

//     });
console.log(externals);

// function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = {
    devtool: 'source-map',

    entry: entry,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'ts-loader'
                    }]
            },
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('precss'), require(
                                'autoprefixer')]
                        }
                    }
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

    externals: [externals],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new ProgressBarPlugin()
    ]
};
