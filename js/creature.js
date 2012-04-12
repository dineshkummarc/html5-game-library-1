if( window.Wibbly == null ) window.Wibbly = {};

Wibbly.Creature = function()
{
	this.x = -1;
	this.y = -1;
	this.type = "sprite";
	this.sprite = null;
}

Wibbly.Creature.prototype.moveTo = function( point )
{
	this.x = point.x;
	this.y = point.y;
}
