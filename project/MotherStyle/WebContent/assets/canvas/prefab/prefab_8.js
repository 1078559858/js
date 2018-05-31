
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_8.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_8(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(105, -7, 'common1', 'heiban.png', this);
	
	var _textTitle = this.game.add.text(195, 248, '8、面4个，你最想\n      拥有？', {"font":"bold 45px Arial","fill":"#ffffff"}, this);
	
	var _temp = this.game.add.sprite(0, -4, 'temp3', null, this);
	_temp.scale.setTo(0.3, 0.3);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(56, 563);
	
	var _dhk_png = this.game.add.button(0, 0, 'common1', this.clickBtn, this, null, 'dhk.png', null, null, _group1);
	_dhk_png.data = {
	"value":"a"
	};
	
	this.game.add.text(122, 33, 'A:全新戴森无绳吸尘器', {"font":"bold 36px Arial","fill":"#ffffff"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(56, 713);
	
	var _dhk_png1 = this.game.add.button(0, 0, 'common1', this.clickBtn, this, null, 'dhk.png', null, null, _group2);
	_dhk_png1.data = {
	"value":"b"
	};
	
	this.game.add.text(122, 33, 'B:LV最新限量款包包', {"font":"bold 36px Arial","fill":"#ffffff"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(56, 863);
	
	var _dhk_png2 = this.game.add.button(0, 0, 'common1', this.clickBtn, this, null, 'dhk.png', null, null, _group3);
	_dhk_png2.data = {
	"value":"c"
	};
	
	this.game.add.text(122, 33, 'C:环游世界的旅游', {"font":"bold 36px Arial","fill":"#ffffff"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(56, 1013);
	
	var _dhk_png3 = this.game.add.button(0, 0, 'common1', this.clickBtn, this, null, 'dhk.png', null, null, _group4);
	_dhk_png3.data = {
	"value":"d"
	};
	
	this.game.add.text(122, 33, 'D:孩子是牛娃', {"font":"bold 36px Arial","fill":"#ffffff"}, _group4);
	
	this.game.add.sprite(284, -4, 'ip', 'xiong.png', this);
	
	
	
	// public fields
	
	this.fTextTitle = _textTitle;
	this.fGroup1 = _group1;
	this.fGroup2 = _group2;
	this.fGroup3 = _group3;
	this.fGroup4 = _group4;
	
}

/** @type Phaser.Group */
var prefab_8_proto = Object.create(Phaser.Group.prototype);
prefab_8.prototype = prefab_8_proto;
prefab_8.prototype.constructor = prefab_8;

/* --- end generated code --- */
// -- user code here --
prefab_8.prototype.initOnce = function () {

};

prefab_8.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	//gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroupOver);
	// gGame.gameScene.disAppearGroup(this);
	gGame.gameScene.appearGroup(this, gGame.gameScene.fGroupOver);

	gGame.gameScene.fGroupOver.initOnce();
};

prefab_8.prototype.setBackground = function () {
	gGame.gameScene.setColorChange( '995ba3');
};