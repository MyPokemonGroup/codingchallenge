let { execSync } = require('child_process');
let path = require("path");

function checkprice(asin) {
    let options = {
        // 'stdio': 'inherit',
        'cwd': __dirname
    };
    let price = execSync('python3 ' +  'check_price.py' + ' ' + asin, options);

    return price.toString().slice(0,price.length-1);
}

module.exports = checkprice;
