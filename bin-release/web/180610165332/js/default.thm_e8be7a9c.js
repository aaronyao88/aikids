
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"SceneBegin":"resource/game/SceneBegin.exml","GameSetting":"resource/game/GameSetting.exml","SceneLevel":"resource/game/SceneLevel.exml","LevelIcon":"resource/game/LevelIcon.exml","SceneGame":"resource/game/SceneGame.exml","Word":"resource/game/Word.exml","CodeGame":"resource/game/CodeGame.exml"}
generateEUI.paths['resource/game/AnswerWord.exml'] = window.WordSkin = (function (_super) {
	__extends(WordSkin, _super);
	function WordSkin() {
		_super.call(this);
		this.skinParts = ["lb_text"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.lb_text_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 78;
		t.strokeColor = 0x0276D0;
		t.strokeWeight = 4;
		t.width = 78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.text = "字";
		t.textColor = 0x000000;
		t.x = 24;
		t.y = 24;
		return t;
	};
	return WordSkin;
})(eui.Skin);generateEUI.paths['resource/game/CodeGame.exml'] = window.CodeGameSkin = (function (_super) {
	__extends(CodeGameSkin, _super);
	var CodeGameSkin$Skin1 = 	(function (_super) {
		__extends(CodeGameSkin$Skin1, _super);
		function CodeGameSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CodeGameSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "GameBG3_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return CodeGameSkin$Skin1;
	})(eui.Skin);

	function CodeGameSkin() {
		_super.call(this);
		this.skinParts = ["role","move"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this.role_i(),this.move_i()];
	}
	var _proto = CodeGameSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 862;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i(),this._Rect16_i(),this._Rect17_i(),this._Rect18_i(),this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i(),this._Rect23_i(),this._Rect24_i(),this._Rect25_i(),this._Rect26_i(),this._Rect27_i(),this._Rect28_i(),this._Rect29_i(),this._Rect30_i(),this._Rect31_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 144;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 144;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 144;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 144;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 0;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 144;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 288;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 432;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 288;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 432;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 432;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 288;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 432;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 288;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 432;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 576;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 576;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 720;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 576;
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 720;
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 720;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 288.22;
		t.y = 576;
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x6CD306;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 144;
		t.y = 720;
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 432.22;
		t.y = 576;
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x54A503;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 576.22;
		t.y = 720;
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x0964f9;
		t.height = 270;
		t.width = 720;
		t.x = 0;
		t.y = 864;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "dog_png";
		t.width = 108;
		t.x = 18;
		t.y = 14;
		return t;
	};
	_proto.move_i = function () {
		var t = new eui.Button();
		this.move = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.label = "移动";
		t.width = 144;
		t.x = 102;
		t.y = 927;
		t.skinName = CodeGameSkin$Skin1;
		return t;
	};
	return CodeGameSkin;
})(eui.Skin);generateEUI.paths['resource/game/GameSetting.exml'] = window.GameSettingSkin = (function (_super) {
	__extends(GameSettingSkin, _super);
	var GameSettingSkin$Skin2 = 	(function (_super) {
		__extends(GameSettingSkin$Skin2, _super);
		function GameSettingSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_music_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_music_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin2;
	})(eui.Skin);

	var GameSettingSkin$Skin3 = 	(function (_super) {
		__extends(GameSettingSkin$Skin3, _super);
		function GameSettingSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sound_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sound_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin3;
	})(eui.Skin);

	var GameSettingSkin$Skin4 = 	(function (_super) {
		__extends(GameSettingSkin$Skin4, _super);
		function GameSettingSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","YesBtn1_jpg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "YesBtn_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin4;
	})(eui.Skin);

	function GameSettingSkin() {
		_super.call(this);
		this.skinParts = ["btn_music","btn_music_disable","gp_music","btn_effect","btn_effect_disable","gp_effect","btn_confirm"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.gp_music_i(),this.gp_effect_i(),this.btn_confirm_i()];
	}
	var _proto = GameSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Dialog_png";
		t.x = 106;
		t.y = 418.5;
		return t;
	};
	_proto.gp_music_i = function () {
		var t = new eui.Group();
		this.gp_music = t;
		t.x = 240;
		t.y = 518.5;
		t.elementsContent = [this.btn_music_i(),this.btn_music_disable_i()];
		return t;
	};
	_proto.btn_music_i = function () {
		var t = new eui.Button();
		this.btn_music = t;
		t.height = 64;
		t.label = "";
		t.width = 76;
		t.x = 0;
		t.y = 1;
		t.skinName = GameSettingSkin$Skin2;
		return t;
	};
	_proto.btn_music_disable_i = function () {
		var t = new eui.Image();
		this.btn_music_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.gp_effect_i = function () {
		var t = new eui.Group();
		this.gp_effect = t;
		t.x = 401;
		t.y = 518.5;
		t.elementsContent = [this.btn_effect_i(),this.btn_effect_disable_i()];
		return t;
	};
	_proto.btn_effect_i = function () {
		var t = new eui.Button();
		this.btn_effect = t;
		t.height = 64;
		t.label = "";
		t.width = 76;
		t.x = 0;
		t.y = 1;
		t.skinName = GameSettingSkin$Skin3;
		return t;
	};
	_proto.btn_effect_disable_i = function () {
		var t = new eui.Image();
		this.btn_effect_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.btn_confirm_i = function () {
		var t = new eui.Button();
		this.btn_confirm = t;
		t.height = 56;
		t.label = "";
		t.width = 127;
		t.x = 296.5;
		t.y = 611.5;
		t.skinName = GameSettingSkin$Skin4;
		return t;
	};
	return GameSettingSkin;
})(eui.Skin);generateEUI.paths['resource/game/LevelIcon.exml'] = window.LevelIconSkin = (function (_super) {
	__extends(LevelIconSkin, _super);
	function LevelIconSkin() {
		_super.call(this);
		this.skinParts = ["lb_level"];
		
		this.height = 77;
		this.width = 78;
		this.elementsContent = [this.lb_level_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",2,"lb_level")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",2,"lb_level")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"lb_level")
				])
		];
	}
	var _proto = LevelIconSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "gs_select_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "gs_select_dis_png";
		return t;
	};
	_proto.lb_level_i = function () {
		var t = new eui.Label();
		this.lb_level = t;
		t.horizontalCenter = 0;
		t.text = "100";
		t.verticalCenter = 0;
		t.x = 16;
		t.y = 23;
		return t;
	};
	return LevelIconSkin;
})(eui.Skin);generateEUI.paths['resource/game/SceneBegin.exml'] = window.SceneBeginSkin = (function (_super) {
	__extends(SceneBeginSkin, _super);
	var SceneBeginSkin$Skin5 = 	(function (_super) {
		__extends(SceneBeginSkin$Skin5, _super);
		function SceneBeginSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","StartBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneBeginSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "StartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneBeginSkin$Skin5;
	})(eui.Skin);

	var SceneBeginSkin$Skin6 = 	(function (_super) {
		__extends(SceneBeginSkin$Skin6, _super);
		function SceneBeginSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneBeginSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gs_select_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneBeginSkin$Skin6;
	})(eui.Skin);

	function SceneBeginSkin() {
		_super.call(this);
		this.skinParts = ["btn_begin","btn_setting"];
		
		this.height = 1134;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.btn_begin_i(),this.btn_setting_i()];
	}
	var _proto = SceneBeginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1137.52;
		t.source = "GameBG1_jpg";
		t.width = 745.76;
		t.x = 4.24;
		t.y = 0;
		return t;
	};
	_proto.btn_begin_i = function () {
		var t = new eui.Button();
		this.btn_begin = t;
		t.height = 112;
		t.label = "";
		t.width = 355;
		t.x = 182.5;
		t.y = 1002;
		t.skinName = SceneBeginSkin$Skin5;
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.height = 78;
		t.label = "设置";
		t.width = 77;
		t.x = 594;
		t.y = 22;
		t.skinName = SceneBeginSkin$Skin6;
		return t;
	};
	return SceneBeginSkin;
})(eui.Skin);generateEUI.paths['resource/game/SceneGame.exml'] = window.SceneGameSkin = (function (_super) {
	__extends(SceneGameSkin, _super);
	var SceneGameSkin$Skin7 = 	(function (_super) {
		__extends(SceneGameSkin$Skin7, _super);
		function SceneGameSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin7;
	})(eui.Skin);

	var SceneGameSkin$Skin8 = 	(function (_super) {
		__extends(SceneGameSkin$Skin8, _super);
		function SceneGameSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ResultBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ResultBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin8;
	})(eui.Skin);

	function SceneGameSkin() {
		_super.call(this);
		this.skinParts = ["btn_back","group_answer","group_words","img_question","btn_next","lb_explain","lb_from","group_win"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_back_i(),this.group_answer_i(),this.group_words_i(),this.img_question_i(),this.group_win_i()];
	}
	var _proto = SceneGameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "GameBG3_jpg";
		t.x = -4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "WordFrame_png";
		t.x = 37.5;
		t.y = 90;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.height = 73;
		t.label = "";
		t.width = 94;
		t.x = 0;
		t.y = 7;
		t.skinName = SceneGameSkin$Skin7;
		return t;
	};
	_proto.group_answer_i = function () {
		var t = new eui.Group();
		this.group_answer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.width = 404;
		t.x = 178;
		t.y = 440;
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i(),this._AnswerWord3_i(),this._AnswerWord4_i()];
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 96;
		t.y = 0;
		return t;
	};
	_proto._AnswerWord3_i = function () {
		var t = new AnswerWord();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 191;
		t.y = 0;
		return t;
	};
	_proto._AnswerWord4_i = function () {
		var t = new AnswerWord();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 286;
		t.y = 0;
		return t;
	};
	_proto.group_words_i = function () {
		var t = new eui.Group();
		this.group_words = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 512;
		t.width = 532;
		t.x = 131;
		t.y = 568;
		t.elementsContent = [this._Word1_i(),this._Word2_i(),this._Word3_i(),this._Word4_i(),this._Word5_i(),this._Word6_i(),this._Word7_i(),this._Word8_i(),this._Word9_i(),this._Word10_i(),this._Word11_i(),this._Word12_i(),this._Word13_i(),this._Word14_i(),this._Word15_i(),this._Word16_i(),this._Word17_i(),this._Word18_i(),this._Word19_i(),this._Word20_i(),this._Word21_i(),this._Word22_i(),this._Word23_i(),this._Word24_i(),this._Word25_i()];
		return t;
	};
	_proto._Word1_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Word2_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 96;
		t.y = 0;
		return t;
	};
	_proto._Word3_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 191;
		t.y = 0;
		return t;
	};
	_proto._Word4_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 286;
		t.y = 0;
		return t;
	};
	_proto._Word5_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 382;
		t.y = 0;
		return t;
	};
	_proto._Word6_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 5;
		t.y = 94;
		return t;
	};
	_proto._Word7_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 101;
		t.y = 94;
		return t;
	};
	_proto._Word8_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 196;
		t.y = 94;
		return t;
	};
	_proto._Word9_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 291;
		t.y = 94;
		return t;
	};
	_proto._Word10_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 387;
		t.y = 94;
		return t;
	};
	_proto._Word11_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 7;
		t.y = 186;
		return t;
	};
	_proto._Word12_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 103;
		t.y = 186;
		return t;
	};
	_proto._Word13_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 198;
		t.y = 186;
		return t;
	};
	_proto._Word14_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 293;
		t.y = 186;
		return t;
	};
	_proto._Word15_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 389;
		t.y = 186;
		return t;
	};
	_proto._Word16_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 8;
		t.y = 271;
		return t;
	};
	_proto._Word17_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 104;
		t.y = 271;
		return t;
	};
	_proto._Word18_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 199;
		t.y = 271;
		return t;
	};
	_proto._Word19_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 294;
		t.y = 271;
		return t;
	};
	_proto._Word20_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 390;
		t.y = 271;
		return t;
	};
	_proto._Word21_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 8;
		t.y = 356;
		return t;
	};
	_proto._Word22_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 104;
		t.y = 356;
		return t;
	};
	_proto._Word23_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 199;
		t.y = 356;
		return t;
	};
	_proto._Word24_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 294;
		t.y = 356;
		return t;
	};
	_proto._Word25_i = function () {
		var t = new Word();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 390;
		t.y = 356;
		return t;
	};
	_proto.img_question_i = function () {
		var t = new eui.Image();
		this.img_question = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.width = 346;
		t.x = 182;
		t.y = 212;
		return t;
	};
	_proto.group_win_i = function () {
		var t = new eui.Group();
		this.group_win = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 536;
		t.visible = false;
		t.width = 666;
		t.x = 12;
		t.y = 540;
		t.elementsContent = [this._Image3_i(),this.btn_next_i(),this.lb_explain_i(),this.lb_from_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "Result_png";
		t.x = 17;
		t.y = 28;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.height = 82;
		t.label = "";
		t.width = 166;
		t.x = 426;
		t.y = 382;
		t.skinName = SceneGameSkin$Skin8;
		return t;
	};
	_proto.lb_explain_i = function () {
		var t = new eui.Label();
		this.lb_explain = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 492;
		t.x = 76;
		t.y = 142;
		return t;
	};
	_proto.lb_from_i = function () {
		var t = new eui.Label();
		this.lb_from = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 492;
		t.x = 82;
		t.y = 253;
		return t;
	};
	return SceneGameSkin;
})(eui.Skin);generateEUI.paths['resource/game/SceneLevel.exml'] = window.SceneLevelSkin = (function (_super) {
	__extends(SceneLevelSkin, _super);
	var SceneLevelSkin$Skin9 = 	(function (_super) {
		__extends(SceneLevelSkin$Skin9, _super);
		function SceneLevelSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneLevelSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneLevelSkin$Skin9;
	})(eui.Skin);

	function SceneLevelSkin() {
		_super.call(this);
		this.skinParts = ["img_arrow","gp_level","sc_level","btn_back"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this.sc_level_i(),this.btn_back_i()];
	}
	var _proto = SceneLevelSkin.prototype;

	_proto.sc_level_i = function () {
		var t = new eui.Scroller();
		this.sc_level = t;
		t.height = 1136;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this.gp_level_i();
		return t;
	};
	_proto.gp_level_i = function () {
		var t = new eui.Group();
		this.gp_level = t;
		t.height = 1136;
		t.width = 720;
		t.elementsContent = [this.img_arrow_i()];
		return t;
	};
	_proto.img_arrow_i = function () {
		var t = new eui.Image();
		this.img_arrow = t;
		t.source = "PageDownBtn_png";
		t.x = 554;
		t.y = 894;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.height = 73;
		t.label = "";
		t.width = 94;
		t.x = 568;
		t.y = 1026;
		t.skinName = SceneLevelSkin$Skin9;
		return t;
	};
	return SceneLevelSkin;
})(eui.Skin);generateEUI.paths['resource/game/Word.exml'] = window.WordSkin = (function (_super) {
	__extends(WordSkin, _super);
	function WordSkin() {
		_super.call(this);
		this.skinParts = ["lb_text"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.lb_text_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 78;
		t.strokeColor = 0x0276D0;
		t.strokeWeight = 4;
		t.width = 78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.text = "字";
		t.textColor = 0x000000;
		t.x = 24;
		t.y = 24;
		return t;
	};
	return WordSkin;
})(eui.Skin);