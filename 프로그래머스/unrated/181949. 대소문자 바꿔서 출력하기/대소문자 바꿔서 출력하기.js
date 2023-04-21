const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    reg = /^[a-z]/;
    console.log(str.split('').map(c => {
        if(c.match(reg)) return c.toUpperCase();
        else return c.toLowerCase();
    }).join(''));
});