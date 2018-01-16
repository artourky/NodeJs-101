var fs = require('fs');

fs.rename('textfile1.txt', "renamedTextFile1.txt", function(err) {
    if (err) throw err;
    console.log("renamed");
});