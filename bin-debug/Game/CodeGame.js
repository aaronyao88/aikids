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
        //数据变量
        _this._touchStatus = false; //当前触摸状态，按下时，值为true  
        _this._distance = new egret.Point(); //鼠标点击时，鼠标与按钮的位置差
        _this._original = new egret.Point(); // btn原始位置
        _this.btn_id = 0; //创建按钮的ID
        _this.barrier_id = 0; // 障碍ID
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
        //监听各个按钮事件
        this.obj_move.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMove, this);
        this.obj_move.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        this.obj_rotation.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMove, this);
        this.obj_rotation.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        this.obj_push.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMove, this);
        this.obj_push.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);
        this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_return, this);
        this.btn_nextlevel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_nextlevel, this);
    };
    //初始化关卡
    CodeGame.prototype.InitLevel = function (level) {
        this.initMap(level);
        //清空代码执行区
        if (this.btn_array.length > 0) {
            for (var i = 0; i < this.btn_array.length; i++) {
                this.gp_control.removeChild(this.btn_array[i]);
            }
            this.btn_array = new Array();
        }
    };
    CodeGame.prototype.initMap = function (level) {
        var _this = this;
        this.gp_object_layer.removeChildren();
        //初始化数据
        this.actionFlag = 0;
        this.levelIndex = level;
        this.gp_win.visible = false;
        this.bone.visible = true;
        this.leveldata = LevelDataManagement.getInstance().GetLevel(level);
        //初始化障碍
        this.barrier = [];
        this.barrier.push(this.createBarrier(3, 1, "wall", this.barrier_id++));
        this.barrier.push(this.createBarrier(5, 4, "wall", this.barrier_id++));
        this.barrier.push(this.createBarrier(2, 3, "hole", this.barrier_id++));
        this.barrier.push(this.createBarrier(2, 2, "box", this.barrier_id++));
        this.barrier.forEach(function (element) {
            _this.gp_object_layer.addChild(element);
        });
        //初始化骨头的位置
        this.bone.anchorOffsetX = this.bone.width / 2;
        this.bone.anchorOffsetY = this.bone.height / 2;
        this.bone.x = this.leveldata.end.x * 144 - 144 / 2;
        this.bone.y = this.leveldata.end.y * 144 - 144 / 2;
        //初始化主角的位置
        this.role.anchorOffsetX = this.role.width / 2;
        this.role.anchorOffsetY = this.role.height / 2;
        this.role.x = this.leveldata.start.x * 144 - 144 / 1.5;
        this.role.y = this.leveldata.start.y * 144 - 144 / 2;
        this.role.scaleX = 1.2;
        this.role.scaleY = 1.2;
        this.gp_object_layer.addChild(this.role);
        this.role.gotoAndStop("right");
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
        else if (event.currentTarget.btnType == 'rotate') {
            this.btn_temp = new rotationDroplistButton();
        }
        else {
            this.btn_temp = new pushDroplistButton();
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
            //按钮与按钮间的插入线判断
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
        this.btn_run.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
        // 初始化地图
        this.initMap(this.levelIndex);
        var runData = this.prepareRunDdata(this.btn_array);
        this.startToRun(runData);
    };
    CodeGame.prototype.prepareRunDdata = function (btn_arr) {
        var runData = new Array();
        btn_arr.forEach(function (val, idx, array) {
            var data = val;
            if (val.btnType == "move") {
                for (var i = 0; i < data.moveNumber; i++) {
                    runData.push(data);
                }
            }
            else {
                runData.push(data);
            }
        });
        console.log("runData length:" + runData.length);
        return runData;
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
                    point = this.calPoint(1);
                    isHitBarrier = this.checkHitBarrier(point, this.barrier);
                    console.log("isHitBarrier:" + isHitBarrier);
                    if (isHitBarrier == false)
                        this.roleMCStartPlay(1);
                    break;
                case "rotate":
                    this.playRotation(btn.direction);
                    if (btn.direction == "右") {
                        this.actionFlag = this.actionFlag + 1;
                    }
                    else {
                        this.actionFlag = this.actionFlag - 1;
                    }
                    if (this.actionFlag == 4) {
                        this.actionFlag = 0;
                    }
                    else if (this.actionFlag < 0) {
                        this.actionFlag = 3;
                    }
                    break;
                case "push":
                    point = this.calPoint(1);
                    var hitBox = this.checkIsBox(point, this.barrier);
                    if (hitBox) {
                        //推箱子
                        var boxPoint = this.calBoxPoint(hitBox);
                        this.roleMCStartPlay(1);
                        egret.Tween.get(hitBox, {}).to({ x: boxPoint.x, y: boxPoint.y }, 1 * 1000);
                        var isInHole = this.checkBoxInHole(boxPoint);
                        if (isInHole) {
                            this.removeHitBox(hitBox);
                        }
                    }
                    else {
                        //lose
                        isHitBarrier = true;
                        console.log("no hit box");
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
                egret.Tween.get(this.role, { onChange: funcChange }).to({ x: point.x, y: point.y }, 1 * 1000).call(this.startToRun, this, [button_array]);
            }
        }
        else {
            this.checkHitTarget();
            this.role.stop();
        }
        console.log("startToRunEnd");
    };
    CodeGame.prototype.removeHitBox = function (box) {
        var _this = this;
        this.barrier.forEach(function (element, idx, array) {
            if (element.barrier_id == box.barrier_id) {
                console.log("remove type:" + element.type);
                _this.barrier.splice(idx, 1);
            }
        });
    };
    CodeGame.prototype.afterBoxMove = function (point) {
        console.log("afterBoxMove play sound, run animation");
        this.barrier.forEach(function (element) {
            console.log("element type:" + element.type + " this barrier.x:" + element.x + " y:" + element.y);
        });
    };
    //检查箱子是否调入洞中，并将箱子移除
    CodeGame.prototype.checkBoxInHole = function (point) {
        var _this = this;
        var isHit = false;
        console.log("box.x:" + point.x + " box.y:" + point.y);
        this.barrier.forEach(function (element, idx, array) {
            console.log("checkBoxInHole element type:" + element.type + " this barrier.x:" + element.x + " y:" + element.y);
            if (element.hitTestPoint(point.x + 1, point.y + 1)) {
                console.log("remove type:" + element.type);
                //将box和element都从barrier中移除
                delete _this.barrier[idx];
                isHit = true;
            }
        });
        console.log(this.barrier);
        return isHit;
    };
    CodeGame.prototype.checkIsBox = function (point, barrier) {
        var hitResult = null;
        barrier.some(function (element) {
            if (element.hitTestPoint(point.x, point.y) && element.type == "box") {
                hitResult = element;
                return true;
            }
            return false;
        });
        return hitResult;
    };
    CodeGame.prototype.checkHitBarrier = function (point, barrier) {
        var hitResult = false;
        barrier.some(function (element) {
            if (element != undefined) {
                if (element.hitTestPoint(point.x, point.y)) {
                    hitResult = true;
                    return true;
                }
            }
            return false;
        });
        return hitResult;
    };
    CodeGame.prototype.calBoxPoint = function (box) {
        var point = new egret.Point(box.x, box.y);
        var orientation = this.actionFlag;
        switch (orientation) {
            case 0:
                if ((box.x + 144) < 720) {
                    point.x = box.x + 144;
                }
                break;
            case 1:
                if ((box.y + 144) < 864) {
                    point.y = box.y + 144;
                }
                break;
            case 2:
                if ((box.x - 144) > 0) {
                    point.x = box.x - 144;
                }
                break;
            case 3:
                if ((box.y - 144) > 0) {
                    point.y = box.y - 144;
                }
                break;
            default:
                console.log("error");
        }
        return point;
    };
    CodeGame.prototype.playRotation = function (direction) {
        var orientation = this.actionFlag;
        switch (orientation) {
            case 0:
                if (direction == "右") {
                    this.role.gotoAndPlay("righttodown", 1);
                }
                else {
                    this.role.gotoAndPlay("righttoup", 1);
                }
                break;
            case 1:
                if (direction == "右") {
                    this.role.gotoAndPlay("downtoleft", 1);
                }
                else {
                    this.role.gotoAndPlay("downtoright", 1);
                }
                break;
            case 2:
                if (direction == "右") {
                    this.role.gotoAndPlay("lefttoup", 1);
                }
                else {
                    this.role.gotoAndPlay("lefttodown", 1);
                }
                break;
            case 3:
                if (direction == "右") {
                    this.role.gotoAndPlay("uptoright", 1);
                }
                else {
                    this.role.gotoAndPlay("uptoleft", 1);
                }
                break;
            default:
                console.log("playRotation error");
        }
        SoundManager.getInstance().playRotationSound();
    };
    CodeGame.prototype.roleMCStartPlay = function (num) {
        var orientation = this.actionFlag;
        switch (orientation) {
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
                console.log("roleMCStartPlay error");
        }
        SoundManager.getInstance().playRunSound(num);
    };
    CodeGame.prototype.calPoint = function (num) {
        var point = new egret.Point(this.role.x, this.role.y);
        var orientation = this.actionFlag;
        switch (orientation) {
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
        this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
        //解锁下一关
        SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
    };
    CodeGame.prototype.showLose = function () {
        console.log("lose");
        this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
        SoundManager.getInstance().playWrong();
    };
    //egret.Tween.get(this.role).to({ x: this.role.x - 144 }, 600, egret.Ease.sineIn).call(this.moveToX, this, ["right", num - 1]).wait(300);
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
    CodeGame.prototype.createBarrier = function (x, y, type, id) {
        var barrier = new Barrier(type, id);
        barrier.x = (x - 1) * 144;
        barrier.y = (y - 1) * 144;
        return barrier;
    };
    return CodeGame;
}(eui.Component));
__reflect(CodeGame.prototype, "CodeGame", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CodeGame.js.map