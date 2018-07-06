
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * betChoicePrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function betChoicePrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _opt_6 = this.game.add.group(this);
	_opt_6.position.setTo(485, 220);
	
	var _betChoice_png31 = this.game.add.button(0, 0, 'bg', this.clickBet, this, null, 'betChoice3.png', null, null, _opt_6);
	_betChoice_png31.data = {
	"idx":6
	};
	
	this.game.add.sprite(82, 19, 'text', 'rang.png', _opt_6);
	
	this.game.add.text(115, 173, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_6);
	
	this.game.add.text(115, 136, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_6);
	
	this.game.add.text(42, 62, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_6);
	
	this.game.add.sprite(66, 37, 'bg2', 'win.png', _opt_6);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_6);
	
	var _opt_5 = this.game.add.group(this);
	_opt_5.position.setTo(246, 220);
	
	var _betChoice_png4 = this.game.add.button(5, 0, 'bg', this.clickBet, this, null, 'betChoice1.png', null, null, _opt_5);
	_betChoice_png4.data = {
	"idx":5
	};
	
	this.game.add.sprite(92, 17, 'text', 'double.png', _opt_5);
	
	this.game.add.text(115, 173, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_5);
	
	this.game.add.text(115, 136, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_5);
	
	this.game.add.text(42, 62, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_5);
	
	this.game.add.sprite(66, 37, 'bg2', 'win.png', _opt_5);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_5);
	
	var _opt_4 = this.game.add.group(this);
	_opt_4.position.setTo(19, 220);
	
	var _betChoice_png5 = this.game.add.button(0, 0, 'bg', this.clickBet, this, null, 'betChoice1.png', null, null, _opt_4);
	_betChoice_png5.data = {
	"idx":4
	};
	
	this.game.add.sprite(100, 17, 'text', 'dan.png', _opt_4);
	
	this.game.add.text(115, 173, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_4);
	
	this.game.add.text(115, 136, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_4);
	
	this.game.add.text(46, 62, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_4);
	
	this.game.add.sprite(64, 43, 'bg2', 'win.png', _opt_4);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_4);
	
	var _opt_3 = this.game.add.group(this);
	_opt_3.position.setTo(485, -6);
	
	var _betChoice_png2 = this.game.add.button(-1, 0, 'bg', this.clickBet, this, null, 'betChoice2.png', null, null, _opt_3);
	_betChoice_png2.data = {
	"idx":3
	};
	
	this.game.add.sprite(60, 17, 'text', 'kewin.png', _opt_3);
	
	this.game.add.text(115, 175, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_3);
	
	this.game.add.text(115, 140, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_3);
	
	this.game.add.text(51, 67, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_3);
	
	this.game.add.sprite(64, 41, 'bg2', 'win.png', _opt_3);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_3);
	
	var _opt_2 = this.game.add.group(this);
	_opt_2.position.setTo(246, -6);
	
	var _betChoice_png1 = this.game.add.button(5, 0, 'bg', this.clickBet, this, null, 'betChoice2.png', null, null, _opt_2);
	_betChoice_png1.data = {
	"idx":2
	};
	
	this.game.add.sprite(82, 17, 'text', 'ping.png', _opt_2);
	
	this.game.add.text(115, 175, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_2);
	
	this.game.add.text(115, 140, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_2);
	
	this.game.add.text(48, 69, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_2);
	
	this.game.add.sprite(68, 47, 'bg2', 'win.png', _opt_2);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_2);
	
	var _opt_1 = this.game.add.group(this);
	_opt_1.position.setTo(19, -6);
	
	var _betChoice_png = this.game.add.button(0, 0, 'bg', this.clickBet, this, null, 'hehe1.png', null, null, _opt_1);
	_betChoice_png.data = {
	"idx":1
	};
	
	this.game.add.sprite(64, 17, 'text', 'main.png', _opt_1);
	
	this.game.add.text(115, 175, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_1);
	
	this.game.add.text(115, 140, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _opt_1);
	
	this.game.add.text(43, 68, '2.94倍', {"font":"bold 45px Arial","fill":"#0000ff"}, _opt_1);
	
	this.game.add.sprite(75, 50, 'bg2', 'win.png', _opt_1);
	
	this.game.add.text(72, 135, '', {"font":"bold 42px Arial","fill":"#ff0000"}, _opt_1);
	
	
	
	// public fields
	
	this.fOpt_6 = _opt_6;
	this.fOpt_5 = _opt_5;
	this.fOpt_4 = _opt_4;
	this.fOpt_3 = _opt_3;
	this.fOpt_2 = _opt_2;
	this.fOpt_1 = _opt_1;
	/* --- post-init-begin --- */
	// you can insert code here

	//create Text
	this.initBetChoice();
	this.disAppearWin();
	/* --- post-init-end --- */
	
	
}

/** @type Phaser.Group */
var betChoicePrefab_proto = Object.create(Phaser.Group.prototype);
betChoicePrefab.prototype = betChoicePrefab_proto;
betChoicePrefab.prototype.constructor = betChoicePrefab;

/* --- end generated code --- */
// -- user code here --

betChoicePrefab.prototype.appearWin = function () {
	for(var i = 1; i <= 6; i++){
		var group = this.getGroup(i);
		group.getChildAt(5).scale.x = 1;
	}
};

betChoicePrefab.prototype.disAppearWin = function () {
	for(var i = 1; i <= 6; i++){
		var group = this.getGroup(i);
		group.getChildAt(5).scale.x = 0;
	}
};

betChoicePrefab.prototype.addBetCountText = function (idx, str) {
	str = "+" + str;

	var group = this.getGroup(idx);
	var gText = group.getChildAt(6);
	var style = {fontSize:"45px", fill:"#ff0000"};
	var text = new Phaser.Text(this.game, gText.x + 10, gText.y, str, style);
	group.addChild(text);

	var vTween = this.game.add.tween(text).to( { x:text.x, y:text.y - 180}, 1500, Phaser.Easing.Exponential.Out, true);
	vTween.onComplete.add(tweenFunc,this);

	function tweenFunc(fSpr, fTween) {
		text.destroy();
	}
};

//who 0\1\2\3\4\5
betChoicePrefab.prototype.addBetCount = function (uid, who, count) {
	var group = this.getGroup(who + 1);

	// if(gUserInfo.power < count){
	// 	gGame.gameScene.setTips("游戏币不足！增加10W游戏币！");
	// 	gUserInfo.power += 100000;
	// 	gGame.gameScene.setPowerChange(100000);
	// 	return;
	// }

	this.game.state.states.Net.make2001(who, count);
};

betChoicePrefab.prototype.playerBetResult = function (obj) {
	if(obj.err){
		console.log("投注失败！", JSON.stringify(obj.err));
		return;
	}

	var count = obj.count;
	var who = obj.who;
	var uid = obj.uid;
	var nick = obj.nick;
	var group = this.getGroup(who + 1);

	gUserInfo.power = obj.power || 0;
	gUserInfo.money = obj.money|| 0;

	if(uid === gUserInfo.uid){
		gUserInfo.betMine[who] += count;
		gGame.gameScene.fPlayerPrefab.updateMess();
		this.addBetCountText(who + 1, count);
	}

	gUserInfo.betTotal[who] += count;
	this.updateBetTotal();
};

betChoicePrefab.prototype.clickBet = function (btn) {
	// if(!gGame.gameScene.isBetting()){
	// 	gGame.gameScene.setTips("非投注时间，无法投注！");
	// 	return;
	// }

	this.addBetCount("", btn.data.idx - 1, gUserInfo.betLevel);
};

betChoicePrefab.prototype.getGroup = function (idx) {
	switch (idx){
		case 1:return this.fOpt_1;
		case 2:return this.fOpt_2;
		case 3:return this.fOpt_3;
		case 4:return this.fOpt_4;
		case 5:return this.fOpt_5;
		case 6:return this.fOpt_6;
		default:
			GlobalUtils.MessageLog("group is not defined! idx=", idx);
			break;
	}

	return this.fOpt_1;
};

betChoicePrefab.prototype.initText = function (fGroup) {
	fGroup.getChildAt(3).anchor.set(0.5,0);			//总投注
	fGroup.getChildAt(2).anchor.set(0.5,0);			//本人投注

	fGroup.getChildAt(2).text = 0;
	fGroup.getChildAt(3).text = 0;
	fGroup.getChildAt(4).text = "";
};

betChoicePrefab.prototype.initBetChoice = function () {
	for(var i = 1; i <= 6; i++){
		this.initText(this.getGroup(i));
	}
};

betChoicePrefab.prototype.updateBetTotal = function () {
	for(var i = 0; i < 6; i++){
		var group = this.getGroup(i + 1);
		group.getChildAt(2).text = gUserInfo.betTotal[i];
		group.getChildAt(3).text = gUserInfo.betMine[i];
	}
};

betChoicePrefab.prototype.setBonusBeiShu = function () {
	for(var i = 0; i < gRoomInfo.betPrice.length; i++){
		var str = gRoomInfo.betPrice[i] + "0倍";
		this.getGroup(i + 1).getChildAt(4).text = str;
	}
};

betChoicePrefab.prototype.setWin = function (idx) {
	var group = this.getGroup(idx);
	var win = group.getChildAt(5);
	win.scale.x = 1;
};
