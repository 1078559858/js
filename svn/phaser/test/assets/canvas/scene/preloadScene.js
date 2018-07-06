
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * preloadScene.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function preloadScene(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(-2, 2, 'processBg', null, this);
	
	this.game.add.sprite(103, 145, 'LOGO', null, this);
	
	this.game.add.sprite(237, 739, 'processbar1', null, this);
	
	this.game.add.text(306, 695, '赛前热身中...', {"font":"bold 24px Arial"}, this);
	
	var _processBar = this.game.add.sprite(237, 739, 'processbar2', null, this);
	
	
	
	// public fields
	
	this.fProcessBar = _processBar;

	console.log("xxxxxxx");
	var bmpText = this.game.add.bitmapText(2, 100, 'yellow', '+,0123456', 64);
}

/** @type Phaser.Group */
var preloadScene_proto = Object.create(Phaser.Group.prototype);
preloadScene.prototype = preloadScene_proto;
preloadScene.prototype.constructor = preloadScene;

/* --- end generated code --- */
// -- user code here --