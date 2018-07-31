var command = process.argv[2];
// var term = process.argv.slice(3).join(" ");

// var Tweet = require("./liri.js");
var Song = require("./liri.js");
// const { Tweet, Song } = require("./liri")
// Tweet();
// Song();
// var tweet = new Tweet();
var song = new Song();

switch (command) {
  case "my-tweets":
    // console.log(keys.twitter);
    // tweet.findTweets();

    break;

  case "spotify-this-song":
    song.findSong();
    // console.log(keys.spotify);
    break;

  case "movie-this":
    console.log("movie");
    break;

  case "do-what-it-says":
    console.log("DO IT");
    break;


  default:
  console.log("Invalid Command");

}
