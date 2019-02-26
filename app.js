// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
// require https module
const https = require('https');



function printMessage(username, badgeCount, points) {
const message =  `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
	console.log(message);
}

function getProfile(username) {

// connect to the API url https://teamtreehouse.com/luismorales8.json
const request = https.get('https://teamtreehouse.com/luismorales8.json', (response) => {
console.log(response.statusCode);
//read the data
	let body = "";
	response.on('data', data => {
		body += data.toString();
	});
	
	response.on('end', () => {
				//parse the data
				const profile = JSON.parse(body);
	            //print out the data
				printMessage(username, profile.badges.length, profile.points.JavaScript);
				});
	



});

}

const users = ["chalkers", "luismorales8"];

users.forEach(getProfile);




