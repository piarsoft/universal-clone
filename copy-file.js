var exec = require('child_process').exec;

module.exports = function copyFile(source, target) {
    if(process.platform === 'win32') {
        exec("xcopy " + source + " " + target + " /S", function (err, stdout) {
            if (err) {
                console.log(err);
            } else {
                console.log(stdout);
            }
        });
    } else {
        exec("cp -R " + source + " " + target, function (err, stdout) {
            if (err) {
                console.log(err);
            } else {
                console.log(stdout);
            }
        });
    }
};