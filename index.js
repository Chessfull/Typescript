var a;
var b = 10;
var c = "string";
var d = false;
var g;
var e = [1, 2, 3];
var f = [1, 2, 3];
var h = [1, "a", true];
var i = ["a", 1, true];
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["admin"] = 0] = "admin";
    UserRoles[UserRoles["user"] = 1] = "user";
})(UserRoles || (UserRoles = {}));
;
var userRole = UserRoles.user;
console.log(userRole);
