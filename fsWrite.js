var fs = require('fs');

fs.writeFile("textfile3.txt", "WRiTing File?", function(err) {
    if(err) throw err;
    console.log("WROTE a file, FUDGE YEAH?!");
});