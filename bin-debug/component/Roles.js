var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Roles = (function () {
    function Roles(leveldata) {
        var _this = this;
        this.roleslist = new Array();
        this.roleArray = [];
        leveldata.role_list.forEach(function (element) {
            var role = new Role(element.name, element.type, element.x, element.y);
            _this.roleslist.push(role);
            _this.roleArray.push({ "name": element.name, "value": element.type });
        });
    }
    Roles.prototype.getRoleByType = function (type) {
        var fileterArr = this.roleslist.filter(function (element, index, arr) {
            return element.type == type;
        });
        return fileterArr[0];
    };
    return Roles;
}());
__reflect(Roles.prototype, "Roles");
//# sourceMappingURL=Roles.js.map