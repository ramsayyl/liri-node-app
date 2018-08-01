require("dotenv").config();

var request = require("request");
var fs = require("fs");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

var choice = process.argv.slice(3).join(" ");
var textFile = "random.txt";

var Liri = function() {

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
      } else {
        console.log(error);
      }
    });
  },

  this.findSong = function() {

    spotify.search({
      type: 'track',
      query: choice,
      limit : 1,
  }, function(err, data) {
      if(!err) {
        var json = data.tracks.items;

        var songInfo = [
          "Artist: " + json[0].artists[0].name,
          "Song Name: "  + json[0].name,
          "Album: " + json[0].album.name
        ].join("\n\n");
        console.log(songInfo)
      } else {
        choice = "The Sign"

        console.log("Error occured: " + err);
      }
    })

  },

  this.findMovie = function() {
    var URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd844c38&t=" + choice;

    request(URL, function(error, response, body) {
      var json = JSON.parse(body);

      var movieInfo = [
        "Title: " + json.Title,
        "Year: " + json.Year,
        "IMDB Rating: " + json.Ratings[0].Value,
        "Rotten Tomatoes Rating: " + json.Ratings[1].Value,
        "Country: " + json.Country,
        "Language: " + json.Language,
        "Plot: " + json.Plot,
        "Actors: " + json.Actors
      ].join("\n\n");
      console.log(movieInfo);
    })

  },

  this.justDoit = function() {

    fs.readFile(textFile, 'utf8', function(err, data) {
      var text = data.split(",")
      choice = text[0];
      value = text[1];
      console.log("Command: " + choice);
      console.log("Value: " + value);

    });

  }
};

module.exports = Liri;
