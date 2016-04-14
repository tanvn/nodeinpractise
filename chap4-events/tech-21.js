/**
 * http://usejsdoc.org/
 */
var util = require("util");
var events = require("events");

var AudioDevice = {
	play : function(track) {
		console.log("playing...")
		// Stub: Trigger playback through iTunes, mpg123, etc.
	},
	stop : function() {
		console.log("stopped !")
	}
};

function MusicPlayer() {
	events.EventEmitter.call(this);
}




util.inherits(MusicPlayer, events.EventEmitter);
var musicPlayer = new MusicPlayer();

musicPlayer.on("error", function(err){
	console.log("Err : "+ err);
})



musicPlayer.on("play", function(track) {
//	this.playing = true;
//	AudioDevice.play(track);
//	process.nextTick(function(){
		musicPlayer.emit("error", "Playing forever....");
//	})

})

musicPlayer.on("stop", function(track) {
	this.playing = false;
	AudioDevice.stop();

})


musicPlayer.emit('play', 'The Roots - The Fire');
setTimeout(function() {
	musicPlayer.emit("stop");
},1000)