const path = require('path');
const fs = require("fs");

//Declaration of variables
const readmePath = path.resolve('./README.md');
const resultado_tests = process.argv[2] == 0 ? 'succes' : 'false'
// const resultado_tests = 'failure'


const test_succes = "test-succes-green";
const test_failure = "test-failure-red"

//Add Badge
var Badge = resultado_tests == "success" ? test_succes : test_failure;
//Change Readme
fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    let README = data.search('test-succes-green') !== -1 ? data.replace('test-succes-green', Badge) : data.replace('test-failure-red', Badge)
    fs.writeFile(readmePath, README, function(err) {
        if (err) throw err;
        console.log("Badge añadido correctamente");
        process.exit(0)
    });
});