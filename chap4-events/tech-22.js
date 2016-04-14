/**
 * http://usejsdoc.org/
 */
var util = require('util');
var domain = require('domain');
var events = require('events');
var audioDomain = domain.create();
function AudioDevice() {
	events.EventEmitter.call(this);
	this.on('play', this.play.bind(this));
}
util.inherits(AudioDevice, events.EventEmitter);
AudioDevice.prototype.play = function() {
	this.emit('error', new Error('not implemented yet'));
};
function MusicPlayer() {
	events.EventEmitter.call(this);
	this.audioDevice = new AudioDevice();
	this.on('play', this.play.bind(this));
	this.emit('error', new Error('No audio tracks are available'));
}
util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
	this.audioDevice.emit('play');
	console.log("Now playing...")
}
audioDomain.on('error', function(err) {
	console.log("Audio domain : "+ err)
})
audioDomain.run(function() {
	var musicPlayer = new MusicPlayer();
	musicPlayer.play();
})