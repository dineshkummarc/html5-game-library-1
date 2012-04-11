if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.game = {
	'canvas': null,
	'audio': null,
	'level': null,
	'player': {},
	'reset': function()
	{
		this.canvas = null;
		this.audio = null;
		this.level = null;
		this.player = {};
	},
	'start': function()
	{
		this.canvas = new Wibbly.Canvas( document.getElementById( "game" ) );
		this.audio = new Wibbly.Audio();
		this.level = Wibbly.levels[ 0 ];
		this.loadSprites();
		this.loadSounds();
		this.tick();
	},
	'tick': function()
	{
		var self = this;
		requestAnimationFrame( function(){ self.tick() } );
		this.update();
		this.draw();
	},
	'update': function()
	{
		// Get input, move npcs, etc.
	},
	'draw': function()
	{
		// Step animation frames and then send all objects to be drawn to the canvas wrapper
		this.canvas.drawLevel( this.level );
		var objects = [];
		this.canvas.drawObjects( objects );
	},
	'loadSprites': function()
	{
		var sprites = [ "void", "grass" ];

		for( var index in sprites )
		{
			this.canvas.makeSprite( index, document.getElementById( sprites[ index ] ) );
		}
	},
	'loadSounds': function()
	{
		var elements = document.getElementById( "media" ).getElementsByTagName( "audio" );

		for( var i in elements )
		{
			var audio = elements[ i ];
			this.audio.addSound( audio.id, audio );
		}
	}
};




// requestAnimationFrame polyfill
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = 
		  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
})();
