
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_3.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_3(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(89, 60, 'common1', 'heiban.png', this);
	
	var _temp = this.game.add.sprite(0, 0, 'temp3', null, this);
	_temp.scale.setTo(0.3, 0.3);
	
	this.game.add.sprite(243, -5, 'ip', 'boy.png', this);
	
	this.game.add.text(135, 209, '3、宝宝的小卧室，\n     你最希望装修成\n     什么风格', {"font":"bold 40px Arial","fill":"#ffffff"}, this);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(-1, -1);
	
	var _chat = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group1);
	_chat.data = {
	"value":"a"
	};
	
	this.game.add.text(136, 505, 'A:小猪佩奇社会风', {"font":"bold 36px Arial"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(-3, 177);
	
	var _chat1 = this.game.add.button(48, 472, 'chat3', this.clickBtn, this, null, null, null, null, _group2);
	_chat1.data = {
	"value":"b"
	};
	
	this.game.add.text(138, 507, 'B: 幻想童话风', {"font":"bold 36px Arial"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(-1, 376);
	
	var _chat2 = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group3);
	_chat2.data = {
	"value":"c"
	};
	
	this.game.add.text(135, 502, 'C：运动风', {"font":"bold 36px Arial"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(-3, 554);
	
	var _chat3 = this.game.add.button(52, 460, 'chat3', this.clickBtn, this, null, null, null, null, _group4);
	_chat3.data = {
	"value":"d"
	};
	
	this.game.add.text(139, 494, 'D：懒得拾掇，交给Ta爹', {"font":"bold 36px Arial"}, _group4);
	
	
	
}

/** @type Phaser.Group */
var prefab_3_proto = Object.create(Phaser.Group.prototype);
prefab_3.prototype = prefab_3_proto;
prefab_3.prototype.constructor = prefab_3;

/* --- end generated code --- */
// -- user code here --

prefab_3.prototype.initOnce = function () {

};

prefab_3.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup4);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup4);
};

prefab_3.prototype.setBackground = function () {
	gGame.gameScene.setColorChange( 'f7973a');
};