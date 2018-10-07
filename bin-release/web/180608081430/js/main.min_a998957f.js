var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(s=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],o=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,s,a,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Word=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onclick_tap,t),t}return __extends(t,e),t.prototype.onclick_tap=function(){SceneGame.getInstance().onclick_word(this)},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.setWordText=function(e){this.lb_text.text=e},t.prototype.getWordText=function(){return this.lb_text.text},t}(eui.Component);__reflect(Word.prototype,"Word",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),this.startAnimation(e),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.addChild(new SceneBegin)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.startAnimation=function(e){var t=this,n=new egret.HtmlTextParser,r=e.map(function(e){return n.parse(e)}),i=this.textfield,o=-1,s=function(){o++,o>=r.length&&(o=0);var e=r[o];i.textFlow=e;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(s,t)};s()},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(r,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var AnswerWord=function(e){function t(){var t=e.call(this)||this;return t.SelectWord=null,t}return __extends(t,e),t.prototype.onclick_tap=function(){null!=this.SelectWord&&(this.SelectWord.visible=!0,this.SelectWord=null,this.setWordText("")),console.log("AnswerWord")},t.prototype.SetSelectWord=function(e){null!=e?(this.setWordText(e.getWordText()),this.SelectWord=e,e.visible=!1):(this.setWordText(""),this.SelectWord=null)},t}(Word);__reflect(AnswerWord.prototype,"AnswerWord");var GameSetting=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.getInstance=function(){return t.shared||(t.shared=new t),t.shared},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.init()},t.prototype.init=function(){this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickConfirm,this),this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickMusic,this),this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickEffect,this),this.update_buttonstate()},t.prototype.clickConfirm=function(){SoundManager.getInstance().playClick(),this.parent.removeChild(this)},t.prototype.clickMusic=function(){SoundManager.getInstance().playClick(),SoundManager.getInstance().isMusic=!SoundManager.getInstance().isMusic,this.update_buttonstate()},t.prototype.clickEffect=function(){SoundManager.getInstance().playClick(),SoundManager.getInstance().isEffect=!SoundManager.getInstance().isEffect,this.update_buttonstate()},t.prototype.update_buttonstate=function(){this.btn_effect_disable.visible=!SoundManager.getInstance().isEffect,this.btn_music_disable.visible=!SoundManager.getInstance().isMusic},t}(eui.Component);__reflect(GameSetting.prototype,"GameSetting",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var LevelIcon=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/game/LevelIcon.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},Object.defineProperty(t.prototype,"Level",{get:function(){return parseInt(this.lb_level.text)},set:function(e){this.lb_level.text=e.toString()},enumerable:!0,configurable:!0}),t}(eui.Button);__reflect(LevelIcon.prototype,"LevelIcon");var SceneBegin=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.getInstance=function(){return t.shared||(t.shared=new t),t.shared},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.init()},t.prototype.init=function(){SoundManager.getInstance(),this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beginTap,this),this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beginSetting,this)},t.prototype.beginTap=function(){SoundManager.getInstance().playClick(),this.parent.addChild(SceneLevel.getInstance()),this.parent.removeChild(this)},t.prototype.beginSetting=function(){SoundManager.getInstance().playClick(),this.addChild(GameSetting.getInstance())},t}(eui.Component);__reflect(SceneBegin.prototype,"SceneBegin",["eui.UIComponent","egret.DisplayObject"]);var SceneGame=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.getInstance=function(){return null==t.shared&&(t.shared=new t),t.shared},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.init()},t.prototype.init=function(){this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_back,this),this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_next,this),SoundManager.getInstance()},t.prototype.onclick_back=function(){SoundManager.getInstance().playClick(),this.parent.addChild(SceneLevel.getInstance()),this.parent.removeChild(this)},t.prototype.InitLevel=function(e){this.levelIndex=e;var t=LevelDataManager.getInstance().GetLevel(e),n=t.answer+t.word;if(10==n.length){var r=Math.floor(400*Math.random());if(r!=e){var i=LevelDataManager.getInstance().GetLevel(r);n+=i.word+i.answer}}for(var o=[],r=0;r<n.length;r++)o.push(n.charAt(r));o=this.randomlist(o);for(var r=0;r<this.group_words.numChildren;r++){var s=this.group_words.getChildAt(r);s.setWordText(o[r]),s.visible=!0}for(var r=0;r<this.group_answer.numChildren;r++){var a=this.group_answer.getChildAt(r);a.SetSelectWord(null),a.visible=!0,a.SelectWord=null}this.group_win.visible=!1,this.img_question.source="resource/assets/"+t.img},t.prototype.randomlist=function(e){for(var t=[];e.length>0;){var n=Math.floor(Math.random()*e.length);t.push(e[n]),e.splice(n,1)}return t},t.prototype.onclick_word=function(e){SoundManager.getInstance().playClick();for(var t=null,n=0;n<this.group_answer.numChildren;n++){var r=this.group_answer.getChildAt(n);if(null==r.SelectWord){t=r;break}}if(null!=t){t.SetSelectWord(e);for(var i="",n=0;n<this.group_answer.numChildren;n++){var r=this.group_answer.getChildAt(n);i+=r.getWordText()}i==LevelDataManager.getInstance().GetLevel(this.levelIndex).answer?(console.log("win"),this.showWin()):4==i.length&&SoundManager.getInstance().playWrong()}},t.prototype.showWin=function(){this.group_win.visible=!0;var e=LevelDataManager.getInstance().GetLevel(this.levelIndex);this.lb_from.text=e.tip,this.lb_explain.text=e.content,SoundManager.getInstance().playRight(),SceneLevel.getInstance().OpenLevel(this.levelIndex+1),console.log(this.levelIndex)},t.prototype.onclick_next=function(){SoundManager.getInstance().playClick(),this.group_win.visible=!1,SceneLevel.getInstance().OpenLevel(this.levelIndex+1),this.InitLevel(this.levelIndex+1),console.log(this.levelIndex)},t}(eui.Component);__reflect(SceneGame.prototype,"SceneGame",["eui.UIComponent","egret.DisplayObject"]);var SceneLevel=function(e){function t(){var t=e.call(this)||this;return t.LevelIcon=[],t}return __extends(t,e),t.getInstance=function(){return t.shared||(t.shared=new t),t.shared},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.init()},t.prototype.init=function(){this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_back,this),SoundManager.getInstance();var e=20,t=10,n=(this.width/t,this.height/e),r=new eui.Group;r.width=this.width,r.height=39*n;for(var i=0;i<=r.height/this.height;i++){var o=new eui.Image;o.source=RES.getRes("GameBG2_jpg"),o.y=i*this.height,o.touchEnabled=!1,this.gp_level.addChildAt(o,0)}for(var s=LevelDataManager.getInstance().Milestone,i=0;39>i;i++){var a=new LevelIcon;a.Level=i+1,a.y=n*i/2,a.x=200*Math.sin(a.y/180*Math.PI)+r.width/2,a.y+=n*i/2,a.y=r.height-a.y-n,r.addChild(a),a.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_level,this),a.enabled=s>i,this.LevelIcon.push(a)}r.cacheAsBitmap=!0,this.gp_level.addChild(r),this.gp_level.scrollV=r.height-this.height,this.img_arrow.x=r.getChildAt(0).x-25,this.img_arrow.y=r.getChildAt(0).y-70,r.addChild(this.img_arrow)},t.prototype.onclick_level=function(e){var t=e.currentTarget;console.log(t.Level),SoundManager.getInstance().playClick(),this.sel_level!=t.Level?(this.img_arrow.x=t.x-25,this.img_arrow.y=t.y-70,this.sel_level=t.Level):(this.parent.addChild(SceneGame.getInstance()),SceneGame.getInstance().InitLevel(t.Level),this.parent.removeChild(this))},t.prototype.onclick_back=function(){this.parent.addChild(SceneBegin.getInstance()),SoundManager.getInstance().playClick(),this.parent.removeChild(this)},t.prototype.OpenLevel=function(e){var t=this.LevelIcon[e-1];t.enabled=!0,e>LevelDataManager.getInstance().Milestone&&(LevelDataManager.getInstance().Milestone=e,this.img_arrow.x=t.x-25,this.img_arrow.y=t.y-70,this.sel_level=t.Level)},t}(eui.Component);__reflect(SceneLevel.prototype,"SceneLevel",["eui.UIComponent","egret.DisplayObject"]);var SoundManager=function(){function e(){this.bg_sound=new egret.Sound,this.bg_sound.load("resource/assets/sound/Music.mp3"),this.bg_sound.addEventListener(egret.Event.COMPLETE,this.playBgMusic,this),this.click_sound=new egret.Sound,this.click_sound.load("resource/assets/sound/buttonclick.mp3"),this.tapWord_sound=new egret.Sound,this.tapWord_sound.load("resource/assets/sound/type_word.mp3"),this.right_sound=new egret.Sound,this.right_sound.load("resource/assets/sound/right.mp3"),this.wrong_sound=new egret.Sound,this.wrong_sound.load("resource/assets/sound/wrong.mp3")}return e.getInstance=function(){return e.shared||(e.shared=new e),e.shared},e.prototype.playBgMusic=function(){this.bg_sound&&this.isMusic&&(this.soundChannel=this.bg_sound.play(0,0))},e.prototype.stopBgMusic=function(){this.soundChannel&&this.soundChannel.stop()},e.prototype.playClick=function(){this.click_sound&&this.isEffect&&this.click_sound.play(0,1)},e.prototype.playTapWord=function(){this.tapWord_sound&&this.isEffect&&this.tapWord_sound.play(0,1)},Object.defineProperty(e.prototype,"isMusic",{get:function(){var e=egret.localStorage.getItem("isMusic");return null==e||""==e?!0:"1"==e},set:function(e){e?(egret.localStorage.setItem("isMusic","1"),this.playBgMusic()):(egret.localStorage.setItem("isMusic","0"),this.stopBgMusic())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEffect",{get:function(){var e=egret.localStorage.getItem("isEffect");return null==e||""==e?!0:"1"==e},set:function(e){e?egret.localStorage.setItem("isEffect","1"):egret.localStorage.setItem("isEffect","0")},enumerable:!0,configurable:!0}),e.prototype.playRight=function(){this.isEffect&&this.right_sound.play(0,1)},e.prototype.playWrong=function(){this.isEffect&&this.wrong_sound.play(0,1)},e}();__reflect(SoundManager.prototype,"SoundManager");var LevelDataItem=function(){function e(){}return e}();__reflect(LevelDataItem.prototype,"LevelDataItem");var LevelDataManager=function(){function e(){this.items=[],this.items=RES.getRes("questions_json")}return e.getInstance=function(){return e.shared||(e.shared=new e),e.shared},e.prototype.GetLevel=function(e){return 0>=e&&(e=0),e>=this.items.length&&(e=this.items.length-1),this.items[e]},Object.defineProperty(e.prototype,"Milestone",{get:function(){var e=egret.localStorage.getItem("CODE_milestone");return(""==e||null==e)&&(e="1"),parseInt(e)},set:function(e){egret.localStorage.setItem("CODE_milestone",e.toString())},enumerable:!0,configurable:!0}),e}();__reflect(LevelDataManager.prototype,"LevelDataManager");