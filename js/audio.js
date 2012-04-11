if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Audio = function()
{
	this.sounds = {};
}

Wibbly.Audio.prototype.addSound = function( name, sound )
{
	this.sounds[ name ] = sound;
}

Wibbly.Audio.prototype.play = function( name )
{
	var audio = new Audio();
	audio.src = this.sounds[ name ].src;
	audio.play();
}
