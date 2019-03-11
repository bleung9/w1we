var fs = require("fs");

var filePath = process.argv[2]   //"/tmp/test_async.txt";

fs.readFile("/tmp/test_async.txt", "utf8", function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
})
