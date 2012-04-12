if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Canvas = function( canvasElement )
{
	this.canvas = canvasElement;
	this.canvas.height = 768;
	this.canvas.width = 1024;
	this.context = this.canvas.getContext( "2d" );
	this.tiles = {};
	this.sprites = {};
}

Wibbly.Canvas.prototype.drawObjects = function( objects )
{
	for( var index in objects )
	{
		var object = objects[ index ];

		switch( object.type )
		{
			case "sprite":
			{
				this.context.drawImage( this.sprites[ object.sprite ], object.x, object.y );
				break;
			}
		}
	}
}

Wibbly.Canvas.prototype.drawLevel = function( level )
{
	this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );

	for( var rowIndex in level.map )
	{
		var row = level.map[ rowIndex ];

		for( var colIndex in row )
		{
			var tile = row[ colIndex ];

			this.context.drawImage( this.tiles[ tile ], colIndex * 16, rowIndex * 16 );
		}
	}
}

Wibbly.Canvas.prototype.makeSprite = function( index, name, image )
{
	this.tiles[ index ] = image;
	this.sprites[ name ] = image;
}
