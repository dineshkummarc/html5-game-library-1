if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Player = function()
{
	this.sprite = "ball";
}

Wibbly.Player.prototype = new Wibbly.Creature();
Wibbly.Player.prototype.constructor = Wibbly.Player