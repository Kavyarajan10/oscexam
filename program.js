
const fs = require('fs');

const file1 = "page.text";

const data = `Employee Name: 'pavithra', Employee ID: '001'`;

fs.writeFile(file1, data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");

        fs.readFile(file1, 'utf8', (err, fileData) => {
            if (err) {
                console.log(err);
            } else {
                console.log(fileData);
            }
        });
    }
});
