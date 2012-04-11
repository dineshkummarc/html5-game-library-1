if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Canvas = function( canvasElement )
{
	this.canvas = canvasElement;
	this.canvas.height = canvasElement.clientHeight;
	this.canvas.width = canvasElement.clientWidth;
	this.context = this.canvas.getContext( "2d" );
	this.sprites = {};
}

Wibbly.Canvas.prototype.drawObjects = function( objects )
{

}

Wibbly.Canvas.prototype.drawLevel = function( level )
{
	this.context.clearRect( 0, 0, 256, 192 );

	for( var rowIndex in level.map )
	{
		var row = level.map[ rowIndex ];

		for( var colIndex in row )
		{
			var tile = row[ colIndex ];

			this.context.drawImage( this.sprites[ tile ], colIndex * 16, rowIndex * 16 );
		}
	}
}

Wibbly.Canvas.prototype.makeSprite = function( index, image )
{
	this.sprites[ index ] = image;
}
