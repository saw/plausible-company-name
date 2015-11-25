var fs = require('fs');

var adjectives = fs.readFileSync('./lib/adjectives.txt', 'utf8');
var nouns = fs.readFileSync('./lib/nouns.txt', 'utf8');
var adjectiveList = adjectives.split(/\n/);
var nounList = nouns.split(/\n/);


function randomIndex(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = function() {
	return randomIndex(adjectiveList) + randomIndex(nounList);
}