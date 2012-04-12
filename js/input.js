if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Input = function()
{
	this.keys = {};

	var self = this;

	window.onkeyup = function( event ){ self.keyup( event ); }
	window.onkeydown = function( event ){ self.keydown( event ); }
	window.onblur = function( event ){ self.onblur( event ); }
	window.onmouseup = function( event ){ self.mouseup( event ); }
	window.onmousedown = function( event ){ self.mousedown( event ); }
}

Wibbly.Input.prototype.keyup = function( event )
{
	delete this.keys[ event.which ];
}

Wibbly.Input.prototype.keydown = function( event )
{
	this.keys[ event.which ] = true;
}

Wibbly.Input.prototype.onblur = function( event )
{
	this.keys = {};
}

Wibbly.Input.prototype.mouseup = function( event )
{

}

Wibbly.Input.prototype.mousedown = function( event )
{

}
