class LevelDataValue {
	public start: egret.Point;
	public start2:egret.Point;
	public start3:egret.Point;
	public end: egret.Point;
	public tip: string[];
	public btn_type: MoveForward[];
	public role_list:Role[];
}


//Code Level 管理类
class LevelDataManagement {

	private static shared: LevelDataManagement;
	private items: LevelDataValue[] = [];
	public totalLevels: number;

	public static getInstance() {
		if (!LevelDataManagement.shared) {
			LevelDataManagement.shared = new LevelDataManagement();

		}
		return LevelDataManagement.shared;
	}

	public constructor() {
		this.items = RES.getRes("level_json");
		//	console.log(this.items);
	}

	public GetLevel(level: number): LevelDataValue {
		level = level - 1;
		if (level <= 0) level = 0;
		if (level >= this.items.length) level = this.items.length - 1;
		return this.items[level];
	}

	public get Milestone(): number {
		var milestone = egret.localStorage.getItem("CODE_level_milestone");
		if (milestone == "" || milestone == null) {
			milestone = "1"
		}
		return parseInt(milestone);
	}

	public set Milestone(value: number) {
		egret.localStorage.setItem("CODE_level_milestone", value.toString());

	}

}