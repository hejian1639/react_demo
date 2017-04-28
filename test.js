var fs = require('fs')
var path = require("path");

console.log(__dirname);

var rootDir = './src';
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
    }, {});

// console.log(...entry);

var externals = fs.readdirSync(rootDir)
    .reduce(function(entries, dir) {
        if (fs.statSync(path.join(rootDir, dir))
            .isDirectory()) {
            var entryFile = path.join(rootDir, dir, 'index.js')
            if (fs.existsSync(entryFile)) {
                entries[dir] = dir;
            }
        }

        return entries
    }, {
        'active-links': "active-links",
        'jmui-test': "jmui-test",
        'form': "form",
        'react-flux-babel-karma': "react-flux-babel-karma",
    });
// console.log(externals);

var rootDir = './lib';

function delJSExtension(str) {
    var reg = /.js$/;
    return str.replace(reg, '');
}

function delCSSExtension(str) {
    var reg = /.css$/;
    return str.replace(reg, '');
}
var externalsLib = fs.readdirSync(rootDir)
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

console.log(externalsLib);

// var str = 'jmui.ios.theme.black.css'
// console.log(str.match(/.js$/));
