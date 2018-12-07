require("dotenv").config();
var spotify = new Spotify(65618dd4c4964ad6b25328bb7af3bd51);
var fs = require("fs");
fs.readFile("random.txt", "utf8",function(error, data){
    if (error){
        return console.log(error);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
} );