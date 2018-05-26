
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_4.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_4(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(53, 74, 'qestion_question_bg', null, this);
	
	this.game.add.button(39, 11, 'Q1_title', null, this, null, null, null, null, this);
	
	this.game.add.text(68, 198, '4、宝宝把你2000多块的神\n     仙水给弄砸了，你会\n     怎么处理？', {"font":"bold 40px Arial"}, this);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(0, -1);
	
	var _chat = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group1);
	_chat.data = {
	"value":"a"
	};
	
	this.game.add.text(126, 505, 'A:啥也憋说了，先揍一顿吧', {"font":"bold 36px Arial"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(-2, 177);
	
	var _chat1 = this.game.add.button(48, 472, 'chat3', this.clickBtn, this, null, null, null, null, _group2);
	_chat1.data = {
	"value":"b"
	};
	
	this.game.add.text(138, 507, 'B: 太心疼了，哇哇大哭', {"font":"bold 36px Arial"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(0, 376);
	
	var _chat2 = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group3);
	_chat2.data = {
	"value":"c"
	};
	
	this.game.add.text(135, 483, 'C：耐心地教导孩子，下次\n     把神仙水放高一点', {"font":"bold 36px Arial"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(-2, 554);
	
	var _chat3 = this.game.add.button(52, 460, 'chat3', this.clickBtn, this, null, null, null, null, _group4);
	_chat3.data = {
	"value":"d"
	};
	
	this.game.add.text(139, 472, 'D：让孩子他爹买个更贵\n     的东西', {"font":"bold 36px Arial"}, _group4);
	
	
	
}

/** @type Phaser.Group */
var prefab_4_proto = Object.create(Phaser.Group.prototype);
prefab_4.prototype = prefab_4_proto;
prefab_4.prototype.constructor = prefab_4;

/* --- end generated code --- */
// -- user code here --
prefab_4.prototype.initOnce = function () {

};

prefab_4.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);

	gGame.gameScene.disAppearGroup(this);
	gGame.gameScene.appearGroup(gGame.gameScene.fGroup5);
};

prefab_4.prototype.setBackground = function () {
	this.game.stage.backgroundColor = '#fde500';
};