let a: number;
let b: number = 10;
let c: string = "string";
let d: boolean = false;
let g: any;
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let h: any[] = [1, "a", true];
let i: [string, number, boolean] = ["a", 1, true];

enum UserRoles {
  admin,
  user,
} // 0, 1 enum like all languages
let userRole = UserRoles.user;
console.log(userRole);

let message1;
message1 = "Message"; // -> Type : Any, not string.

let message2: string;
message2 = "Message"; // -> This is string.
