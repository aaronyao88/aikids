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
var Role = (function (_super) {
    __extends(Role, _super);
    function Role(name, type, x, y) {
        var _this = _super.call(this) || this;
        _this.actionFlag = 0; /**MC执行的当前动作索引**/
        _this.name = name;
        _this.x = x;
        _this.y = y;
        _this.type = type;
        //准备mc
        if (_this.type == "lead") {
            var data = RES.getRes("renwu_json");
            var txtr = RES.getRes("renwu_png");
        }
        else if (_this.type == "costar") {
            var data = RES.getRes("renwu2_json");
            var txtr = RES.getRes("renwu2_png");
        }
        else {
            var data = RES.getRes("renwu3_json");
            var txtr = RES.getRes("renwu3_png");
        }
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.displayObject = new egret.MovieClip(mcFactory.generateMovieClipData("walk"));
        _this.displayObject.anchorOffsetX = _this.displayObject.width / 2;
        _this.displayObject.anchorOffsetY = _this.displayObject.height / 2;
        _this.displayObject.x = _this.x * 144 - 144 / 1.5;
        _this.displayObject.y = _this.y * 144 - 144 / 2;
        _this.displayObject.scaleX = 1.2;
        _this.displayObject.scaleY = 1.2;
        _this.displayObject.gotoAndStop("right");
        return _this;
    }
    return Role;
}(eui.Component));
__reflect(Role.prototype, "Role");
//# sourceMappingURL=Role.js.map