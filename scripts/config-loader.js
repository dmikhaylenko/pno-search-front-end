const fs = require("fs");
const path = require("path");

function loadExtentions(dir, regex) {
    return fs.readdirSync(dir).reduce((result, filePath) => {
        let fullPath = path.resolve(dir, filePath);
        return [].concat(result, fs.statSync(fullPath).isDirectory()
            ? loadExtentions(fullPath, regex)
            : [fullPath]);
    }, []).filter(filePath => {
        return regex.test(filePath);
    }).map(filePath => {
        return require(filePath);
    });
}

module.exports = (dir, regex, callback) => {
    return callback(loadExtentions(dir, regex));
}