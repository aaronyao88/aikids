class CodeGame extends eui.Component implements eui.UIComponent {

	public static shared: CodeGame;   //单例
	//UI
	private role:Role;  //主角
	private bone: eui.Image;        // 目标物
	private roles:Array<Role> = new Array<Role>();     //人物集合
	//代码按钮
	private obj_move: droplistButton;       //移动按钮
	private obj_rotation: rotationDroplistButton; //旋转按钮
	private obj_push: pushDroplistButton; //推动按钮
	//系统按钮
	private btn_nextlevel: eui.Button;   //下一关按钮
	private btn_return: eui.Button; //返回按钮
	private btn_run: eui.Button;   //执行动作按钮
	private btn_temp: droplistButton;   //拖动按钮后创建的临时按钮
	private btn_array: Array<droplistButton> = new Array<droplistButton>();  //在运行区的按钮
	private gp_map: eui.Group;             //地图区  1
	private gp_control: eui.Group;         //控制区  2
	private gp_rect: eui.Group;            //按钮区  2-1
	private sc_code_panel: eui.Scroller;   //代码区  2-2
	private gp_win: eui.Group;             //胜利区  3
	private gp_object_layer: eui.Group;    //地图区  4
	private barrier: Barrier[] = [];      //障碍物
	//数据变量
	private _touchStatus: boolean = false;      //当前触摸状态，按下时，值为true  
	private _distance: egret.Point = new egret.Point(); //鼠标点击时，鼠标与按钮的位置差
	private _original: egret.Point = new egret.Point(); // btn原始位置
	private _btnIntersectId;  //按钮之间重叠的ID
	//private actionFlag;	  /**MC执行的当前动作索引**/
	private hit_result: boolean; //判断按钮是否在框内
	private leveldata: LevelDataValue;    //本关数据
	private btn_id: number = 0;     //创建按钮的ID
	private barrier_id: number = 0;    // 障碍ID
	private levelIndex: number;  //关卡ID
	private roleArray = [];   //角色名称列表


	public static getInstance() {
		if (!CodeGame.shared) {
			CodeGame.shared = new CodeGame();
		}
		return CodeGame.shared;
	}


	public constructor() {
		super();
		console.log("CodeGame constructor");

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	protected init(): void {
		SoundManager.getInstance();

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

	}

	//初始化关卡
	public InitLevel(level: number) {

		this.initMap(level);
		//清空代码执行区
		if (this.btn_array.length > 0) {
			for (var i = 0; i < this.btn_array.length; i++) {
				this.gp_control.removeChild(this.btn_array[i]);
			}
			this.btn_array = new Array<droplistButton>();

		}

	}

	private initMap(level: number) {
		this.gp_object_layer.removeChildren();
		//初始化数据
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
		this.barrier.forEach(element => {
			this.gp_object_layer.addChild(element);
		});
		//初始化骨头的位置
		this.bone.anchorOffsetX = this.bone.width / 2;
		this.bone.anchorOffsetY = this.bone.height / 2;
		this.bone.x = this.leveldata.end.x * 144 - 144 / 2;
		this.bone.y = this.leveldata.end.y * 144 - 144 / 2;
		//初始化主角的位置
		this.roles = new Array<Role>();
		this.roleArray = [];
		this.leveldata.role_list.forEach(element => {
			var role = new Role(element.name,element.type,element.x,element.y);
			this.roles.push(role);
			this.gp_object_layer.addChild(role.displayObject);
			this.roleArray.push(element.name);
		});
		this.role = this.roles[0];
	}


	private touchBeginMove(event: egret.TouchEvent) {
		SoundManager.getInstance().playClick();
		var target = event.currentTarget;
		//创建可移动按钮
		if (event.currentTarget.btnType == 'move') {
			this.btn_temp = new droplistButton(this.roleArray);
		} else if (event.currentTarget.btnType == 'rotate') {
			this.btn_temp = new rotationDroplistButton(this.roleArray);
		} else {
			this.btn_temp = new pushDroplistButton(this.roleArray);
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


	}

	private touchMove(event: egret.TouchEvent) {
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

					this.btn_array.some((val, idx, array) => {
						var j: droplistButton = val;
						if (this.btn_temp.isHit(j)) {

							this._btnIntersectId = idx;

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
	}


	private touchEndMove(event: egret.TouchEvent) {
		SoundManager.getInstance().playClick();
		this._touchStatus = false;
		this.gp_control.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		if (this.btn_temp) {
			this.btn_temp.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndMove, this);



			if (this.hit_result) {

				//如果在两个按钮中间
				if (typeof (this._btnIntersectId) != "undefined" && this._btnIntersectId != null) {
					console.log("插入：" + this._btnIntersectId + 1);
					this.btn_array[this._btnIntersectId].line.visible = false;
					//按钮数组插入在两个按钮中间
					this.btn_temp.setEdit(true);
					this.btn_array.splice(this._btnIntersectId + 1, 0, this.btn_temp);

				} else {
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
			} else {
				this.gp_control.removeChild(this.btn_temp);
			}
			this.btn_temp = null;
			this.hit_result = false;
			this._btnIntersectId = null;
		}

	}

	private touch_run() {
		SoundManager.getInstance().playClick();
		this.btn_run.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
		// 初始化地图
		this.initMap(this.levelIndex);
		var runData: Array<droplistButton> = this.prepareRunDdata(this.btn_array);
		this.startToRun(runData);


	}

	private prepareRunDdata(btn_arr: droplistButton[]) {
		var runData: Array<droplistButton> = new Array<droplistButton>();
		btn_arr.forEach((val, idx, array) => {
			var data: droplistButton = val;
			if (val.btnType == "move" || val.btnType == "push") {
				for (var i = 0; i < data.moveNumber; i++) {
					runData.push(data);
				}
			} else {
				runData.push(data)

			}

		});
		console.log("runData length:" + runData.length);
		return runData;
	}

	private startToRun(btn_arr: droplistButton[]) {


		var button_array = btn_arr.concat();
		console.log("button_array:" + button_array.length);
		this.role.displayObject.stop();
		if (button_array.length > 0) {
			var btn: droplistButton = button_array[0];
			button_array.splice(0, 1);
			this.role=this.roles[btn.roleIndex];
			var point: egret.Point = new egret.Point(this.role.displayObject.x, this.role.displayObject.y);
			var isHitBarrier = false;
			console.log("btn.btnType:" + btn.btnType);
			switch (btn.btnType) {
				case "move":
					point = this.calPoint(this.role,1);
					isHitBarrier = this.checkHitBarrier(point, this.barrier);
					console.log("isHitBarrier:" + isHitBarrier);
					if (isHitBarrier == false)
						this.roleMCStartPlay(this.role,1);
					break;
				case "rotate":
					this.playRotation(this.role,btn.direction);
					if (btn.direction == "右") {
						this.role.actionFlag = this.role.actionFlag + 1;
					} else {
						this.role.actionFlag = this.role.actionFlag - 1;
					}

					if (this.role.actionFlag == 4) {
						this.role.actionFlag = 0;
					} else if (this.role.actionFlag < 0) {
						this.role.actionFlag = 3
					}
					break;
				case "push":
					point = this.calPoint(this.role,1);
					var hitBox = this.checkIsBox(point, this.barrier);
					if (hitBox) {
						//推箱子
						var boxPoint = this.calBoxPoint(this.role,hitBox);
						this.roleMCStartPlay(this.role,1);
						egret.Tween.get(hitBox, {}).to({ x: boxPoint.x, y: boxPoint.y }, 1 * 1000);
						var isInHole = this.checkBoxInHole(boxPoint);
						if (isInHole) {
							this.removeHitBox(hitBox);

						}
					} else {
						//lose
						isHitBarrier = true;
						console.log("no hit box");
					}
					break;
			}

			if (isHitBarrier) {
				this.showLose();
				
			} else {
				var funcChange = (): void => {

				}
			//	console.log("this.roles[0].actionFlag: "+this.roles[0].actionFlag + " type:"+this.roles[0].type + "  name:"+ this.roles[0].name);
				egret.Tween.get(this.role.displayObject, { onChange: funcChange }).to({ x: point.x, y: point.y }, 1 * 1000).call(this.startToRun, this, [button_array]);
			}

		} else {
			this.checkHitTarget();
			
		}
		console.log("startToRunEnd");

	}

	private removeHitBox(box: Barrier) {
		this.barrier.forEach((element, idx, array) => {
			if (element.barrier_id == box.barrier_id) {
				console.log("remove type:" + element.type);
				this.barrier.splice(idx, 1);
			}

		});
	}


	private afterBoxMove(point: egret.Point) {

		console.log("afterBoxMove play sound, run animation");



		this.barrier.forEach(element => {
			console.log("element type:" + element.type + " this barrier.x:" + element.x + " y:" + element.y);
		});
	}



	//检查箱子是否调入洞中，并将箱子移除
	private checkBoxInHole(point: egret.Point) {
		var isHit = false;

		console.log("box.x:" + point.x + " box.y:" + point.y);
		this.barrier.forEach((element, idx, array) => {
			console.log("checkBoxInHole element type:" + element.type + " this barrier.x:" + element.x + " y:" + element.y);
			if (element.hitTestPoint(point.x + 1, point.y + 1)) {
				console.log("remove type:" + element.type);
				//将box和element都从barrier中移除
				delete this.barrier[idx];
				isHit = true;
			}

		});
		console.log(this.barrier);

		return isHit;

	}

	private checkIsBox(point: egret.Point, barrier) {
		var hitResult = null
		barrier.some(element => {
			if (element.hitTestPoint(point.x, point.y) && element.type == "box") {
				hitResult = element;
				return true;
			}
			return false;
		});
		return hitResult;

	}

	private checkHitBarrier(point: egret.Point, barrier) {
		var hitResult = false
		barrier.some(element => {
			if (element != undefined) {
				if (element.hitTestPoint(point.x, point.y)) {
					hitResult = true;
					return true;
				}
			}

			return false;
		});

		return hitResult;

	}

	private calBoxPoint(role:Role,box: Barrier) {
		var point = new egret.Point(box.x, box.y);
		var orientation: number = role.actionFlag;
		switch (orientation) {
			case 0:
				if ((box.x + 144) < 720) {
					point.x = box.x + 144
				}
				break;
			case 1:
				if ((box.y + 144) < 864) {
					point.y = box.y + 144
				}

				break;
			case 2:
				if ((box.x - 144) > 0) {
					point.x = box.x - 144
				}
				break;
			case 3:
				if ((box.y - 144) > 0) {
					point.y = box.y - 144
				}
				break;
			default:
				console.log("error");
		}
		return point;

	}

	private playRotation(role:Role,direction: string) {

		var orientation: number = role.actionFlag;
		switch (orientation) {
			case 0:
				if (direction == "右") {
					role.displayObject.gotoAndPlay("righttodown", 1);
				} else {
					role.displayObject.gotoAndPlay("righttoup", 1);
				}
				break;
			case 1:
				if (direction == "右") {
					role.displayObject.gotoAndPlay("downtoleft", 1);
				} else {
					role.displayObject.gotoAndPlay("downtoright", 1);
				}
				break;
			case 2:
				if (direction == "右") {
					role.displayObject.gotoAndPlay("lefttoup", 1);
				} else {
					role.displayObject.gotoAndPlay("lefttodown", 1);
				}
				break;
			case 3:
				if (direction == "右") {
					role.displayObject.gotoAndPlay("uptoright", 1);
				} else {
					role.displayObject.gotoAndPlay("uptoleft", 1);
				}
				break;
			default:
				console.log("playRotation error");

		}

		SoundManager.getInstance().playRotationSound();

	}

	private roleMCStartPlay(role:Role,num: number) {
		var orientation: number = role.actionFlag;

		switch (orientation) {
			case 0:
				role.displayObject.gotoAndPlay("right", -1);
				break;
			case 1:
				role.displayObject.gotoAndPlay("down", -1);

				break;
			case 2:
				role.displayObject.gotoAndPlay("left", -1);
				break;
			case 3:
				role.displayObject.gotoAndPlay("up", -1);
				break;
			default:
				console.log("roleMCStartPlay error");
		}
		SoundManager.getInstance().playRunSound(num);
	}

	private calPoint(role:Role,num: number): egret.Point {
		var point = new egret.Point(this.role.displayObject.x, this.role.displayObject.y);
		var orientation: number = role.actionFlag

		switch (orientation) {
			case 0:
				if ((point.x + num * 144) < 720) {
					point.x = point.x + num * 144
				}
				break;
			case 1:
				if ((point.y + num * 144) < 864) {
					point.y = point.y + num * 144
				}

				break;
			case 2:
				if ((point.x - num * 144) > 0) {
					point.x = point.x - num * 144
				}
				break;
			case 3:
				if ((point.y - num * 144) > 0) {
					point.y = point.y - num * 144
				}
				break;
			default:
				console.log("error");
		}
		return point;

	}


	//移动运行区域的按钮
	private touchCodeBeginMove(event: egret.TouchEvent) {

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

	}

	//运行区域按钮在移动
	private touchCodeMove(event: egret.TouchEvent) {
		if (this._touchStatus) {
			var target = <droplistButton>event.currentTarget;
			target.x = event.stageX - this._distance.x;
			target.y = event.stageY - this._distance.y;
			//console.log("touchCodeMove True, x:"+ target.x);
		} else {
			console.log("else,x:" + target.x);
		}

	}


	//运行区域按钮放下
	private touchCodeEndMove(event: egret.TouchEvent) {
		SoundManager.getInstance().playClick();
		var target = <droplistButton>event.currentTarget;
		var id = target.btnID;
		this._touchStatus = false;
		target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchCodeMove, this);

		this.hit_result = target.isHit(this.gp_rect);
		console.log("hit_result: " + this.hit_result);


		if (this.hit_result) {
			this.gp_control.removeChild(target);
			//更新数组
			this.btn_array.forEach((val, idx, array) => {
				var j: droplistButton = <droplistButton>val;
				if (j.btnID == id) {
					this.btn_array.splice(idx, 1);
				}
			});

			//更新布局
			for (var i = 0; i < this.btn_array.length; i++) {
				this.btn_array[i].x = i * this.btn_array[i].width;
			}

		} else {
			console.log("this._original.x:" + this._original.x);
			console.log("this._original.y:" + this._original.x);
			target.x = this._original.x;
			target.y = this._original.y;
		}

		console.log("touchCodeEndMove");
	}

	private checkHitTarget() {
		var bResult: boolean = this.role.displayObject.hitTestPoint(this.bone.x, this.bone.y);
		console.log("checkHitTarget:" + bResult);
		if (bResult && this.role.type == "lead") {
			this.showWin();
		} else {
			this.showLose();
		}
	}

	private showWin() {
		console.log("win");
		this.role.displayObject.stop();
		this.bone.visible = false;
		this.gp_win.visible = true;
		SoundManager.getInstance().playRight();
		this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
		//解锁下一关
		SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);

	}

	private showLose() {
		console.log("lose");
		this.role.displayObject.stop();
		this.btn_run.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_run, this);
		SoundManager.getInstance().playWrong();
	}


	//egret.Tween.get(this.role).to({ x: this.role.x - 144 }, 600, egret.Ease.sineIn).call(this.moveToX, this, ["right", num - 1]).wait(300);


	//进入下一关
	private touch_nextlevel() {
		SoundManager.getInstance().playClick();
		this.InitLevel(this.levelIndex + 1);
	}


	//返回地图页
	private touch_return(event: egret.TouchEvent) {
		SoundManager.getInstance().playClick();
		this.parent.addChild(SceneLevel.getInstance());
		this.parent.removeChild(this);

	}

	private createBarrier(x, y, type: string, id: number) {
		var barrier = new Barrier(type, id);
		barrier.x = (x - 1) * 144;
		barrier.y = (y - 1) * 144;
		return barrier;

	}



}