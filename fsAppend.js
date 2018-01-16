var fs = require('fs');

// fs.appendFile("textfile1.txt", "Hello Random Reader?", function(err) {
//     if(err) throw err;
//     console.log("appended a file?!");
// });

fs.appendFile("textfile1.txt", "\n what are you doing this evening >.>", function(err) {
    if(err) throw err;
    console.log("appended a file after creating it, niceeeee?!");
});