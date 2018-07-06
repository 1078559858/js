
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * ballgroundPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function ballgroundPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0, 0, 'bg2', 'football.png', this);
	
	this.game.add.sprite(129, 0, 'bg2', 'mess.png', this);
	
	var _textMess = this.game.add.text(214, 9, '主队  切科夫斯基耶娃 进了一球', {"font":"bold 22px Arial","fill":"#80ff00"}, this);
	
	var _groupCountry = this.game.add.group(this);
	
	this.game.add.sprite(27, 452, 'bg2', 'point.png', _groupCountry);
	
	this.game.add.sprite(218, 457, 'bg2', 'yingguo.png', _groupCountry);
	
	this.game.add.sprite(436, 457, 'bg2', 'helan.png', _groupCountry);
	
	this.game.add.sprite(272, 414, 'bg2', 'bifenpai.png', _groupCountry);
	
	var _countryRight = this.game.add.text(565, 466, '法国', {"font":"bold 20px Arial","fill":"#ffffff"}, _groupCountry);
	
	var _countryLeft = this.game.add.text(134, 466, '法国', {"font":"bold 20px Arial","fill":"#ffffff"}, _groupCountry);
	
	var _textTime = this.game.add.text(341, 420, '90:00', {"font":"bold 20px Arial"}, _groupCountry);
	
	var _scoreRight = this.game.add.text(401, 460, '8', {"font":"bold 32px Arial"}, _groupCountry);
	
	var _scoreLeft = this.game.add.text(335, 460, '8', {"font":"bold 32px Arial"}, _groupCountry);
	
	var _textfenhao = this.game.add.text(363, 456, ':   ', {"font":"bold 32px Arial"}, _groupCountry);
	
	
	
	// public fields
	
	this.fTextMess = _textMess;
	this.fCountryRight = _countryRight;
	this.fCountryLeft = _countryLeft;
	this.fTextTime = _textTime;
	this.fScoreRight = _scoreRight;
	this.fScoreLeft = _scoreLeft;
	this.fTextfenhao = _textfenhao;
	
}

/** @type Phaser.Group */
var ballgroundPrefab_proto = Object.create(Phaser.Group.prototype);
ballgroundPrefab.prototype = ballgroundPrefab_proto;
ballgroundPrefab.prototype.constructor = ballgroundPrefab;

/* --- end generated code --- */
// -- user code here --

ballgroundPrefab.prototype.update = function () {

	this.updateTime();		//更新球场时间
	this.updateScore();		//更新球队比分
};

ballgroundPrefab.prototype.updateScore = function () {
	this.fScoreLeft.anchor.set(0.5,0);
	this.fScoreRight.anchor.set(0.5,0);
	this.fScoreLeft.text = gRoomInfo.leftTeam.score;
	this.fScoreRight.text = gRoomInfo.rightTeam.score;

	this.fCountryLeft.text = gRoomInfo.leftTeam.nick;
	this.fCountryRight.text = gRoomInfo.rightTeam.nick;
};

ballgroundPrefab.prototype.updateTime = function () {
	if(!gGame.gameScene.checkStateIsHalf()){
		return;
	}

	var time = Math.floor(gRoomInfo.duration  + gRoomConf.state[gRoomInfo.state].remain - gRoomInfo.remain);

	if(gRoomInfo.duration < 45000){
		time = time > 45000 ? 45000:time;
	}else{
		time = time > 90000 ? 90000:time;
	}

	var timeLeft = Math.floor(time/1000);
	var timeRight = Math.floor(time%1000/10);

	timeLeft = timeLeft < 0 ? 0:timeLeft;
	timeRight = timeRight < 0 ? 0:timeRight;

	timeLeft = timeLeft < 10 ? "0" + timeLeft:timeLeft;
	timeRight = timeRight < 10 ? "0" + timeRight:timeRight;

	var str = timeLeft + ":" + timeRight;
	this.fTextTime.text = str;
};

ballgroundPrefab.prototype.setMess = function (mess) {
	this.fTextMess.text = mess;
};
