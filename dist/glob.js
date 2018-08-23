const glob = require('glob');

// options is optional
glob("**/*.jpg", {}, function (er, files) {
    console.log(files);
})