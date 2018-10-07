var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CodeGame = (function (_super) {
    __extends(CodeGame, _super);
    function CodeGame() {
        var _this = _super.call(this) || this;
        _this.btn_array = new Array(); //在运行区的按钮
        _this.barrier = []; //障碍物
        _this._touchStatus = false; //当前触摸状态，按下时，值为true  
        _this._distance = new egret.Point(); //鼠标点击时，鼠标与按钮的位置差
        _this._original = new egret.Point(); // btn原始位置
        /**MC拥有的动作列表**/
        _this.actionArray = ["righttodown", "downtoleft", "lefttoup", "uptoright"];
        _this.btn_id = 0; //创建按钮的ID
        console.log("CodeGame constructor");
        return _this;
    }
    CodeGame.getInstance = function () {
        if (!CodeGame.shared) {
            CodeGame.shared = new CodeGame();
        }
        return CodeGame.shared;
    };
    CodeGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CodeGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    CodeGame.prototype.init = function () {
        SoundManager.getInstance();
        // 准备mc数据
        var data = RES.getRes("renwu_json");
        var txtr = RES.getRes("renwu_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.role = new egret.MovieClip(mcFactory.generateMovieClipData("walk"));
        this.gp_map.addChild(this.role);
        //监听各个按钮事件
        this.obj_move.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMove, this);
        this.obj_move.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        this.obj_rotation.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMove, this);
        this.obj_rotation.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_return, this);
        this.btn_nextlevel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_nextlevel, this);
    };
    //初始化关卡
    CodeGame.prototype.InitLevel = function (level) {
        var _this = this;
        //初始化数据
        this.actionFlag = 0;
        this.levelIndex = level;
        this.gp_win.visible = false;
        this.bone.visible = true;
        this.leveldata = LevelDataManagement.getInstance().GetLevel(level);
        //初始化主角的位置
        console.log("leveldata:");
        console.log(this.leveldata);
        this.role.anchorOffsetX = this.role.width / 2;
        this.role.anchorOffsetY = this.role.height / 2;
        this.role.rotation = 0;
        this.role.x = this.leveldata.start.x * 144 - 144 / 1.5;
        this.role.y = this.leveldata.start.y * 144 - 144 / 2;
        this.role.scaleX = 1.2;
        this.role.scaleY = 1.2;
        this.role.gotoAndStop("right");
        //初始化骨头的位置
        this.bone.anchorOffsetX = this.bone.width / 2;
        this.bone.anchorOffsetY = this.bone.height / 2;
        this.bone.x = this.leveldata.end.x * 144 - 144 / 2;
        this.bone.y = this.leveldata.end.y * 144 - 144 / 2;
        //初始化障碍
        this.barrier.push(this.createBarrier(3, 1));
        this.barrier.push(this.createBarrier(5, 4));
        this.barrier.forEach(function (element) {
            _this.gp_map.addChild(element);
        });
        //清空代码执行区
        if (this.btn_array.length > 0) {
            for (var i = 0; i < this.btn_array.length; i++) {
                this.gp_control.removeChild(this.btn_array[i]);
            }
            this.btn_array = new Array();
        }
    };
    // private touch_reset(event: egret.TouchEvent) {
    // 	this.InitLevel(this.levelIndex);
    // }
    CodeGame.prototype.touchBeginMove = function (event) {
        SoundManager.getInstance().playClick();
        var target = event.currentTarget;
        //创建可移动按钮
        if (event.currentTarget.btnType == 'move') {
            this.btn_temp = new droplistButton();
        }
        else {
            this.btn_temp = new rotationDroplistButton();
        }
        this.btn_temp.btnID = this.btn_id;
        this.btn_id++;
        this._touchStatus = true;
        this._distance.x = event.stageX - target.x;
        this._distance.y = event.stageY - target.y;
        this.btn_temp.x = target.x;
        this.btn_temp.y = target.y;
        this.gp_control.addChild(this.btn_temp);
        this.gp_control.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.btn_temp.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
    };
    CodeGame.prototype.touchMove = function (event) {
        var _this = this;
        if (this._touchStatus) {
            //console.log("moving now ! Mouse: [X:"+event.stageX+",Y:"+event.stageY+"]");
            this.btn_temp.x = event.stageX - this._distance.x;
            this.btn_temp.y = event.stageY - this._distance.y;
            this.hit_result = this.btn_temp.isHit(this.sc_code_panel);
            console.log("hit_result:" + this.hit_result);
            if (typeof (this._btnIntersectId) != "undefined" && this._btnIntersectId != null) {
                this.btn_array[this._btnIntersectId].line.visible = false;
            }
            if (this.hit_result) {
                if (this.btn_array.length > 0) {
                    this.btn_array.some(function (val, idx, array) {
                        var j = val;
                        if (_this.btn_temp.isHit(j)) {
                            _this._btnIntersectId = idx;
                            return true;
                        }
                        return false;
                    });
                    if (typeof (this._btnIntersectId) != "undefined" && this._btnIntersectId != null) {
                        this.btn_array[this._btnIntersectId].line.visible = true;
                    }
                }
            }
        }
    };
    CodeGame.prototype.touchEndMove = function (event) {
        SoundManager.getInstance().playClick();
        this._touchStatus = false;
        this.gp_control.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.btn_temp.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        if (this.hit_result) {
            //如果在两个按钮中间
            if (typeof (this._btnIntersectId) != "undefined" && this._btnIntersectId != null) {
                console.log("插入：" + this._btnIntersectId + 1);
                this.btn_array[this._btnIntersectId].line.visible = false;
                //按钮数组插入在两个按钮中间
                this.btn_temp.setEdit(true);
                this.btn_array.splice(this._btnIntersectId + 1, 0, this.btn_temp);
            }
            else {
                //否则插入在最后
                this.btn_temp.setEdit(true);
                this.btn_array.push(this.btn_temp);
            }
            this.btn_temp.y = 122;
            //更新布局
            for (var i = 0; i < this.btn_array.length; i++) {
                this.btn_array[i].x = i * this.btn_array[i].width;
            }
            this.btn_temp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchCodeBeginMove, this);
            this.btn_temp.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCodeEndMove, this);
        }
        else {
            this.gp_control.removeChild(this.btn_temp);
        }
        this.btn_temp = null;
        this.hit_result = false;
        this._btnIntersectId = null;
    };
    CodeGame.prototype.touch_run = function () {
        SoundManager.getInstance().playClick();
        // 主角归位
        this.role.x = this.leveldata.start.x * 144 - 144 / 2;
        this.role.y = this.leveldata.start.y * 144 - 144 / 2;
        this.actionFlag = 0;
        this.startToRun(this.btn_array);
    };
    CodeGame.prototype.startToRun = function (btn_arr) {
        var button_array = btn_arr.concat();
        console.log("button_array:" + button_array.length);
        if (button_array.length > 0) {
            var btn = button_array[0];
            console.log("btn:" + btn.btnType);
            button_array.splice(0, 1);
            var point = new egret.Point(this.role.x, this.role.y);
            var isHitBarrier = false;
            switch (btn.btnType) {
                case "move":
                    point = this.calPoint(btn.moveNumber);
                    isHitBarrier = this.checkHitBarrier(point, this.barrier);
                    console.log("isHitBarrier:" + isHitBarrier);
                    if (isHitBarrier == false)
                        this.roleMCStartPlay();
                    break;
                case "rotate":
                    this.role.gotoAndPlay(this.actionArray[this.actionFlag], 1);
                    SoundManager.getInstance().playRotationSound();
                    console.log("btn.direction:" + btn.direction);
                    if (btn.direction == "右") {
                        this.actionFlag = this.actionFlag + 1;
                    }
                    else {
                        this.actionFlag = this.actionFlag - 1;
                    }
                    if (this.actionFlag == this.actionArray.length) {
                        this.actionFlag = 0;
                    }
                    else if (this.actionFlag < 0) {
                        this.actionFlag = this.actionArray.length - 1;
                    }
                    break;
            }
            if (isHitBarrier) {
                this.showLose();
                this.role.stop();
            }
            else {
                var funcChange = function () {
                };
                egret.Tween.get(this.role, { onChange: funcChange }).to({ x: point.x, y: point.y }, btn.moveNumber * 1000).call(this.startToRun, this, [button_array]);
            }
        }
        else {
            this.checkHitTarget();
            this.role.stop();
        }
        console.log("startToRunEnd");
    };
    CodeGame.prototype.checkHitBarrier = function (point, barrier) {
        var hitResult = false;
        barrier.some(function (element) {
            if (element.hitTestPoint(point.x, point.y)) {
                hitResult = true;
                return true;
            }
            return false;
        });
        return hitResult;
    };
    CodeGame.prototype.roleMCStartPlay = function () {
        var direction = this.actionFlag;
        switch (direction) {
            case 0:
                this.role.gotoAndPlay("right", -1);
                break;
            case 1:
                this.role.gotoAndPlay("down", -1);
                break;
            case 2:
                this.role.gotoAndPlay("left", -1);
                break;
            case 3:
                this.role.gotoAndPlay("up", -1);
                break;
            default:
                console.log("error");
        }
        SoundManager.getInstance().playRunSound();
    };
    CodeGame.prototype.calPoint = function (num) {
        var point = new egret.Point(this.role.x, this.role.y);
        var direction = this.actionFlag;
        switch (direction) {
            case 0:
                if ((point.x + num * 144) < 720) {
                    point.x = point.x + num * 144;
                }
                break;
            case 1:
                if ((point.y + num * 144) < 864) {
                    point.y = point.y + num * 144;
                }
                break;
            case 2:
                if ((point.x - num * 144) > 0) {
                    point.x = point.x - num * 144;
                }
                break;
            case 3:
                if ((point.y - num * 144) > 0) {
                    point.y = point.y - num * 144;
                }
                break;
            default:
                console.log("error");
        }
        return point;
    };
    //移动运行区域的按钮
    CodeGame.prototype.touchCodeBeginMove = function (event) {
        SoundManager.getInstance().playClick();
        var dragObject = event.currentTarget;
        //	this.gp_control.setChildIndex(dragObject,20);
        this._original.x = dragObject.x;
        this._original.y = dragObject.y;
        this._touchStatus = true;
        this._distance.x = event.stageX - dragObject.x;
        this._distance.y = event.stageY - dragObject.y;
        console.log("touchCodeBeginMove,btnID:" + dragObject.btnID);
        dragObject.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchCodeMove, this);
    };
    //运行区域按钮在移动
    CodeGame.prototype.touchCodeMove = function (event) {
        if (this._touchStatus) {
            var target = event.currentTarget;
            target.x = event.stageX - this._distance.x;
            target.y = event.stageY - this._distance.y;
            //console.log("touchCodeMove True, x:"+ target.x);
        }
        else {
            console.log("else,x:" + target.x);
        }
    };
    //运行区域按钮放下
    CodeGame.prototype.touchCodeEndMove = function (event) {
        var _this = this;
        SoundManager.getInstance().playClick();
        var target = event.currentTarget;
        var id = target.btnID;
        this._touchStatus = false;
        target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchCodeMove, this);
        this.hit_result = target.isHit(this.gp_rect);
        console.log("hit_result: " + this.hit_result);
        if (this.hit_result) {
            this.gp_control.removeChild(target);
            //更新数组
            this.btn_array.forEach(function (val, idx, array) {
                var j = val;
                if (j.btnID == id) {
                    _this.btn_array.splice(idx, 1);
                }
            });
            //更新布局
            for (var i = 0; i < this.btn_array.length; i++) {
                this.btn_array[i].x = i * this.btn_array[i].width;
            }
        }
        else {
            console.log("this._original.x:" + this._original.x);
            console.log("this._original.y:" + this._original.x);
            target.x = this._original.x;
            target.y = this._original.y;
        }
        console.log("touchCodeEndMove");
    };
    CodeGame.prototype.checkHitTarget = function () {
        var bResult = this.role.hitTestPoint(this.bone.x, this.bone.y);
        console.log("checkHitTarget:" + bResult);
        if (bResult) {
            this.showWin();
        }
        else {
            this.showLose();
        }
    };
    CodeGame.prototype.showWin = function () {
        console.log("win");
        this.bone.visible = false;
        this.gp_win.visible = true;
        SoundManager.getInstance().playRight();
        //解锁下一关
        SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
    };
    CodeGame.prototype.showLose = function () {
        console.log("lose");
        SoundManager.getInstance().playWrong();
    };
    // private moveToX(direction: string, num: number) {
    // 	if (num > 0) {
    // 		if (direction == "right") {
    // 			if ((this.role.x + 144) > 720) {
    // 				console.log("reach the right end");
    // 			} else {
    // 				egret.Tween.get(this.role).to({ x: this.role.x + 144 }, 600, egret.Ease.sineIn).call(this.moveToX, this, ["right", num - 1]).wait(300);
    // 				console.log(this.role.x);
    // 			}
    // 		} else {
    // 			if ((this.role.x - 144) < 0) {
    // 				console.log("reach the left end");
    // 			} else {
    // 				egret.Tween.get(this.role).to({ x: this.role.x - 144 }, 600, egret.Ease.sineIn).call(this.moveToX, this, ["right", num - 1]).wait(300);
    // 				console.log(this.role.x);
    // 			}
    // 		}
    // 	}
    // }
    //进入下一关
    CodeGame.prototype.touch_nextlevel = function () {
        SoundManager.getInstance().playClick();
        this.InitLevel(this.levelIndex + 1);
    };
    //返回地图页
    CodeGame.prototype.touch_return = function (event) {
        SoundManager.getInstance().playClick();
        this.parent.addChild(SceneLevel.getInstance());
        this.parent.removeChild(this);
    };
    CodeGame.prototype.createBarrier = function (x, y) {
        var barrier = new egret.Shape();
        //barrier.graphics.lineStyle(5, 0xff00ff); 
        var barrierX = (x - 1) * 144;
        var barrierY = (y - 1) * 144;
        barrier.graphics.beginFill(0xff00ff, 1);
        barrier.graphics.drawRect(barrierX, barrierY, 144, 144);
        barrier.graphics.endFill();
        return barrier;
    };
    return CodeGame;
}(eui.Component));
__reflect(CodeGame.prototype, "CodeGame", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CodeGame.js.map