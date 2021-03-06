
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * player.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function player(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0, -1, 'bg2', 'logo.png', this);
	
	var _nick = this.game.add.text(144, 18, 'nick', {"font":"bold 20px Arial"}, this);
	
	var _power = this.game.add.text(142, 57, '100,000,000', {"font":"bold 20px Arial","fill":"#ffffff"}, this);
	
	
	
	// public fields
	
	this.fNick = _nick;
	this.fPower = _power;
	/* --- post-init-begin --- */
	// you can insert code here

	//create Text
	this.updateMess();

	/* --- post-init-end --- */
	
	
}

/** @type Phaser.Group */
var player_proto = Object.create(Phaser.Group.prototype);
player.prototype = player_proto;
player.prototype.constructor = player;

/* --- end generated code --- */
// -- user code here --
player.prototype.updateMess = function () {
	//update power
	//update icon
	this.fNick.text = gUserInfo.nick || "TestNick";
	this.fPower.text = FormatNumber.symbol(gUserInfo.power);

	// var randomIdx = GlobalUtils.RandomIntegerRange(1, 10);
	// gUserInfo.url = "http://mohuan.xblade.cn/poke/icon/" + randomIdx + ".jpg";
	//
	// var father = this.fIconBG;
	// gGame.load.image(gUserInfo.url, gUserInfo.url).onLoadComplete.add(function() {
	// 	gGame.gameScene.addIconSprite(father, gUserInfo.url);
	// });
	// gGame.load.start();
};

player.prototype.actionPowerTween = function () {
	var vTween = this.game.add.tween(this.fPower.scale).to( { x:2.0, y:2.0}, 1000,
		Phaser.Easing.Bounce.Out, true);
	vTween.onComplete.add(tweenFunc,this);

	function tweenFunc(fSpr, fTween) {
		//fSpr.destroy();
		//this.fPower.scale
		vTween = null;
		this.fPower.scale.set(1,1);


		// var tween = this.game.add.tween(this.fPower.scale).to( { x:1.0, y:1.0}, 500,
		// 	Phaser.Easing.Bounce.InOut, true);
		// tween.onComplete.add(tweenFunc1,this);
		//
		// function tweenFunc1(ffSpr, ffTween) {
		// 	tween = null;
		// }
	}
};