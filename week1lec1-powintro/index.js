//1

const crypto = require('crypto');
/*
var input = '0';
var hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

//2

function findHashWithLeadingZeros(zeros = 5) {
    let input = '0';
    let hash = crypto.createHash('sha256').update(input).digest('hex');
    const prefix = '0'.repeat(zeros);

    while (!hash.startsWith(prefix)) {
        input = String(Number(input) + 1);
        hash = crypto.createHash('sha256').update(input).digest('hex');
    }
    return { input, hash };
}


console.log('Input:', result.input);
console.log('Hash:', result.hash);
*/
//3

const prefix = '100xdevs';

var input = '0'

var comb = prefix + input;

hash = crypto.createHash('sha256').update(input).digest('hex');

while (!hash.startsWith('00000')) {
    input = String(Number(input) + 1);
    comb = prefix + input;
    hash = crypto.createHash('sha256').update(comb).digest('hex');
}
console.log("Hash:", hash);
console.log("Input:", comb);
