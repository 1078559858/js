
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * overPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function overPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _groupFoxi = this.game.add.group(this);
	
	this.game.add.sprite(0, 0, 'Result_foxi', null, _groupFoxi);
	
	var _groupShaonv = this.game.add.group(this);
	_groupShaonv.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(0, 0, 'Result_shaonv', null, _groupShaonv);
	
	var _groupHU = this.game.add.group(this);
	_groupHU.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(-1, 1, 'Result_huxi', null, _groupHU);
	
	var _groupHuan = this.game.add.group(this);
	_groupHuan.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(0, 0, 'Result_naodong', null, _groupHuan);
	
	var _btnConvert = this.game.add.button(0, 0, 'Result_foxi', this.clickConvertImg, this, null, null, null, null, this);
	_btnConvert.alpha = 0.0;
	
	var _btnMiji = this.game.add.button(243, 758, 'scene0', this.clickStudy, this, null, 's0_2.png', null, null, this);
	
	var _pngMiji = this.game.add.sprite(271, 777, 'scene0', 'miji.png', this);
	
	
	
	// public fields
	
	this.fGroupFoxi = _groupFoxi;
	this.fGroupShaonv = _groupShaonv;
	this.fGroupHU = _groupHU;
	this.fGroupHuan = _groupHuan;
	this.fBtnConvert = _btnConvert;
	this.fBtnMiji = _btnMiji;
	this.fPngMiji = _pngMiji;
	
}

/** @type Phaser.Group */
var overPrefab_proto = Object.create(Phaser.Group.prototype);
overPrefab.prototype = overPrefab_proto;
overPrefab.prototype.constructor = overPrefab;

/* --- end generated code --- */
// -- user code here --

overPrefab.prototype.initOnce = function () {
	var score = 0;

	var ballArr = [
		{"a":1, "b":2, "c":3, "d":4},
		{"a":4, "b":1, "c":3, "d":2},
		{"a":3, "b":1, "c":2, "d":4},
		{"a":4, "b":2, "c":1, "d":3},

		{"a":1, "b":2, "c":3, "d":4},
		{"a":2, "b":3, "c":1, "d":4},
		{"a":2, "b":1, "c":4, "d":3},
		{"a":3, "b":4, "c":2, "d":1}
	];

	console.log(JSON.stringify(gUserInfo.choice));

	for(var i = 0; i < gUserInfo.choice.length && i < ballArr.length; i++){
		score += ballArr[i][gUserInfo.choice[i]];
	}

	if(score <= 8){
		this.fGroupFoxi.scale.x = 1;
		gUserInfo.fileName = 'assets/image/over/Result_foxi.jpg';
	}else if(score <= 16){
		this.fGroupShaonv.scale.x = 1;
		gUserInfo.fileName = 'assets/image/over/Result_shaonv.jpg';
	}else if(score <= 24){
		this.fGroupHU.scale.x = 1;
		gUserInfo.fileName = 'assets/image/over/Result_huxi.jpg';
	}else {
		this.fGroupHuan.scale.x = 1;
		gUserInfo.fileName = 'assets/image/over/Result_naodong.jpg';
	}

	gGame.gameScene.setAnchorMiddle(this.fBtnMiji);
	var tween = this.game.add.tween(this.fBtnMiji.scale).to({x:1.389, y:1.389}, 389, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);

	gGame.gameScene.setAnchorMiddle(this.fPngMiji);
	var tween = this.game.add.tween(this.fPngMiji.scale).to({x:1.389, y:1.389}, 389, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);

	// this.fBtnConvert.events.onInputDown.add(function () {
	// 	gUserInfo.clickTime = Date.now();
	// }, this);
	//
	// this.fBtnConvert.events.onInputUp.add(function () {
	// 	gUserInfo.clickTime = 0;
	// }, this);

	this.convertImageAppear();
};

overPrefab.prototype.clickBtn = function (btn) {

};

overPrefab.prototype.clickStudy = function (btn) {
	gGame.gameScene.fGroupSetName.appearPopLayer();
	this.convertImageDisAppear();
};

overPrefab.prototype.clickAgain = function (btn) {
	// gGame.gameScene.fGroupAD.x = gGameConf.width + 1;
	// gGame.gameScene.appearGroup(this, gGame.gameScene.fGroupAD);
};

overPrefab.prototype.convertImageAppear = function () {
	var img = $('#id_leftUp')[0];
	img.src = gUserInfo.fileName;
	var tsWidth = Math.round(img.clientWidth/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(img.clientHeight / this.game.scale.scaleFactor.y);
	if(!gUserInfo.uppicWidth){
		gUserInfo.uppicWidth = tsWidth + 'px';
	}

	if(!gUserInfo.uppicHeight){
		gUserInfo.uppicHeight = tsHeight*3/4+ 'px'
	}

	img.style.width = gUserInfo.uppicWidth;
	img.style.height = gUserInfo.uppicHeight;
	img.style.margin = '0px 0px 0px ' + this.game.scale.bounds.x + 'px';
	img.style.opacity = 0;

	var img = $('#id_leftDown')[0];
	img.src = gUserInfo.fileName;
	var tsWidth = Math.round(img.clientWidth/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(img.clientHeight / this.game.scale.scaleFactor.y);

	if(!gUserInfo.downpicHeight){
		gUserInfo.downpicHeight = tsHeight/4+ 'px';
	}

	if(!gUserInfo.downpicWidth){
		gUserInfo.downpicWidth = tsWidth + 'px';
	}

	if(!gUserInfo.downpicMarginUp){
		gUserInfo.downpicMarginUp = tsHeight*5/6;
	}

	img.style.width = gUserInfo.downpicWidth;
	img.style.height = gUserInfo.downpicHeight;
	img.style.margin = gUserInfo.downpicMarginUp + 'px 0px 0px ' + this.game.scale.bounds.x + 'px';
	img.style.opacity = 0;
};

overPrefab.prototype.convertImageDisAppear = function () {
	var img = $('#id_leftUp')[0];
	img.style.width = 0 + 'px';
	img.style.height = 0 + 'px';

	var img = $('#id_leftDown')[0];
	img.style.width ='0px';
	img.style.height = '0px';
};

overPrefab.prototype.clickConvertImg = function () {

};

overPrefab.prototype.setBackground = function () {

};