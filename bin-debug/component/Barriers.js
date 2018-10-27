var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Barriers = (function () {
    function Barriers(barrier_list) {
        var _this = this;
        this.barrierList = new Array();
        this.barrier_id = 0;
        if (barrier_list) {
            barrier_list.forEach(function (element) {
                var barrier = new Barrier(element.type, element.barrier_id, element.pair_id);
                barrier.x = (element.x - 1) * 144;
                barrier.y = (element.y - 1) * 144;
                _this.barrierList.push(barrier);
                _this.barrier_id++;
            });
        }
    }
    return Barriers;
}());
__reflect(Barriers.prototype, "Barriers");
//# sourceMappingURL=Barriers.js.map