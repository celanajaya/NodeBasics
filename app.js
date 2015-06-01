//Problem: A simple a way to look at a users badge counts and JavaScript points.
//Solution: use node.js to access API info and print it out.
var profile = require("./profile");
var users = process.argv.slice(2);
users.forEach(profile.get);


