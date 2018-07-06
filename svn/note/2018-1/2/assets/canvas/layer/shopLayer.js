
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * shopLayer.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function shopLayer(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _blackShade_png = this.game.add.button(0, 0, 'bg', null, this, null, 'blackShade.png', null, null, this);
	_blackShade_png.scale.setTo(0.565, 1.65);
	
	this.game.add.button(552, 118, 'btn', this.clickClose, this, null, 'close1.png', null, null, this);
	
	this.game.add.text(310, 111, '商店界面', {"font":"bold 36px Arial","fill":"#ffffff"}, this);
	
	this.game.add.button(443, 491, 'btn', this.clickBuy, this, null, 'btn.png', null, null, this);
	
	this.game.add.text(37, 575, '点击按钮购买1W游戏币', {"font":"bold 36px Arial","fill":"#ffffff"}, this);
	
	this.game.add.text(510, 570, '购买', {"font":"bold 36px Arial"}, this);


	/* --- post-init-begin --- */
	// you can insert code here

	//create Text
	//GlobalUtils.MessageLog("create text");
	this.closeLayer();
	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var shopLayer_proto = Object.create(Phaser.Group.prototype);
shopLayer.prototype = shopLayer_proto;
shopLayer.prototype.constructor = shopLayer;

/* --- end generated code --- */
// -- user code here --

shopLayer.prototype.appearLayer = function () {

};

shopLayer.prototype.clickClose = function () {

};

shopLayer.prototype.clickBuy = function () {

};

shopLayer.prototype.closeLayer = function () {
	this.scale.x = 0;
};

