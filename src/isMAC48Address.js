function solution(inputString) {
    return inputString.split('-').every(x => x.match(/^[0-9A-F]{2}$/));
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isMAC48Address

// alternative solution
