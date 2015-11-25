var fs = require('fs');

var adjectives = fs.readFileSync(__dirname + '/lib/adjectives.txt', 'utf8');
var nouns = fs.readFileSync(__dirname + '/lib/nouns.txt', 'utf8');
var adjectiveList = adjectives.split(/\n/);
var nounList = nouns.split(/\n/);


function randomIndex(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = function() {
	var outString = randomIndex(adjectiveList) + randomIndex(nounList);
	outString = outString[0].toUpperCase() + outString.slice(1);
	return outString;
}