
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_7.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_7(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(103, 32, 'common1', 'heiban.png', this);
	
	var _temp = this.game.add.sprite(0, 0, 'temp3', null, this);
	_temp.scale.setTo(0.3, 0.3);
	
	var _bird_png = this.game.add.sprite(282, 8, 'ip', 'boy2.png', this);
	_bird_png.scale.setTo(0.5, 0.5);
	
	this.game.add.text(147, 191, '7、逢年过节收到给\n     孩子的10万元压\n     岁钱后，你会?', {"font":"bold 40px Arial","fill":"#ffffff"}, this);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(1, 0);
	
	var _chat = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group1);
	_chat.data = {
	"value":"a"
	};
	
	this.game.add.text(135, 494, 'A:全给我家宝宝存起来，长大全给他\n    花，让他从小开始抛弃同龄人。 ', {"font":"bold 25px Arial"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(-1, 178);
	
	var _chat1 = this.game.add.button(48, 472, 'chat3', this.clickBtn, this, null, null, null, null, _group2);
	_chat1.data = {
	"value":"b"
	};
	
	this.game.add.text(134, 490, 'B:又有钱报辅导班了，周四晚上还\n    空着...内心止不住的兴奋。', {"font":"bold 25px Arial"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(1, 377);
	
	var _chat2 = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group3);
	_chat2.data = {
	"value":"c"
	};
	
	this.game.add.text(128, 494, 'C：孩子的钱就是我的钱，“这个包、还\n     有那双鞋，统统包起来”。 ', {"font":"bold 25px Arial"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(-1, 555);
	
	var _chat3 = this.game.add.button(52, 460, 'chat3', this.clickBtn, this, null, null, null, null, _group4);
	_chat3.data = {
	"value":"d"
	};
	
	this.game.add.text(135, 500, 'D：买一房间小猪佩奇的周边送给TA。', {"font":"bold 25px Arial"}, _group4);
	
	
	
}

/** @type Phaser.Group */
var prefab_7_proto = Object.create(Phaser.Group.prototype);
prefab_7.prototype = prefab_7_proto;
prefab_7.prototype.constructor = prefab_7;

/* --- end generated code --- */
// -- user code here --
prefab_7.prototype.initOnce = function () {

};

prefab_7.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup8);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup8);
};

prefab_7.prototype.setBackground = function () {
	gGame.gameScene.setColorChange( '00ae94');
};