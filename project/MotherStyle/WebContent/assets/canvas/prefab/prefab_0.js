
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_0.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_0(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0, 0, 'scene0', 's0_1.png', this);
	
	var _btnBegain = this.game.add.button(190, 870, 'scene0', this.clickBegain, this, null, 's0_3.png', null, null, this);
	
	this.game.add.sprite(180, 105, 'boy', null, this);
	
	
	
	// public fields
	
	this.fBtnBegain = _btnBegain;
	
}

/** @type Phaser.Group */
var prefab_0_proto = Object.create(Phaser.Group.prototype);
prefab_0.prototype = prefab_0_proto;
prefab_0.prototype.constructor = prefab_0;

/* --- end generated code --- */
// -- user code here --

prefab_0.prototype.initOnce = function () {
	gGame.gameScene.setAnchorMiddle(this.fBtnBegain);
	var tween = this.game.add.tween(this.fBtnBegain.scale).to({x:1.1, y:1.1}, 389, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);
};

prefab_0.prototype.clickBegain = function () {
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup1);
};

