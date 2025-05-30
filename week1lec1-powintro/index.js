//1
const crypto = require('crypto');

const input = '0';
var hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

//2
function findHashWithStart(prefix) {
    let input = '0';

    while(true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        if(hash.startsWith(prefix)){
            return { input: inputStr, hash: hash};
        }
        input++;
    }
}

const result = findHashWithStart('00000');
console.log('Input: ', result.input);
console.log('Hash: ', result.hash);
