var command = process.argv[2];

var Liri = require("./liri.js");
var liri = new Liri();

switch (command) {
  case "my-tweets":
    liri.findTweets();
    break;

  case "spotify-this-song":
    liri.findSong();
    break;

  case "movie-this":
    liri.findMovie();
    break;

  case "do-what-it-says":
    liri.justDoit();
    break;

  default:
    console.log("Invalid Command");

}
