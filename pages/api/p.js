const fs = require('fs');
const path = require('path');

export default function p(req, res, next) {
    let ans, ens;
    fs.readFile('./some/some.sol', (err, data) => {
        ans = data.toString();
        ens = err;
        console.log(data.toString());
    });
    
    res.status(201).json({ data: ans, err: ens })
}