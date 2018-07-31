require("dotenv").config();

// var request = require("request");
// var fs = require("fs");

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


var Tweet = function() {

  this.findTweets = function() {
    var params = {
      q: "World Cup",
      count: 21
    };
    client.get('search/tweets', params, function(error, tweets, response){
      var jsonData = tweets.statuses
      if(!error) {
        for (var i = 1; i < jsonData.length; i++) {
          console.log(i + ". " + jsonData[i].text);
          console.log("Tweeted at: " + jsonData[i].created_at + "\n\n")
        }
        // console.log(tweets)
      } else {
        console.log(error);
      }
    });
  }
};

var Song = function() {

  this.findSong = function() {
    spotify.search({type: 'track', query: 'All the Small Things'}, function(err, data) {
      if(!err) {
        console.log(data);
      } else {
        return console.log("Error occured: " + err);
      }
    })

  }
}


// module.exports = {
//   Tweet: () => {}
//   Song: () => {}
// }
module.exports = Song
