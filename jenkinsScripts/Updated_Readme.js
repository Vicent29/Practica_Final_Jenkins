const path = require('path');
const fs = require("fs");

//Declaration of variables
const readmePath = path.resolve('./README.md');
const resultado_tests = process.argv[2] == 0 ? 'success' : 'false'

const test_success = "test-succes-green";
const test_failure = "test-failure-red"

var Badge = resultado_tests == "success" ? test_success : test_failure;
//Change Readme
fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    let README = data.search('test-succes-green') !== -1 ? data.replace('test-succes-green', Badge) : data.replace('test-failure-red', Badge)
    fs.writeFile(readmePath, README, function(err) {
        if (err) throw err;
        console.log("Badge añadido correctamente");
        console.log(README);
        process.exit(0)
    });
});