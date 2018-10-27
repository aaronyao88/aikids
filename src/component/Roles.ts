class Roles {
	public roleslist: Array<Role> = new Array<Role>();
	public roleArray = [];

	public constructor(leveldata) {
		leveldata.role_list.forEach(element => {
			var role = new Role(element.name, element.type, element.x, element.y);
			this.roleslist.push(role);
			this.roleArray.push({ "name": element.name, "value": element.type });
		});
	}

	public getRoleByType(type: string) {
		var fileterArr = this.roleslist.filter(function (element, index, arr) {
			return element.type == type;
		})
		return fileterArr[0];

	}
}