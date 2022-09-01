// interface Searh {
//   (name: string): string;
// }
// let sea: Searh;

// sea = function (name: string) {
//   return "fdfd";
// };

// interface Obj<T> {
//   name: string;
//   obj: T;
// }

// interface Test {
//   age: number;
// }

// const user: Obj<Test> = {
//   name: "tests",
//   obj: {
//     age: 50,
//   },
// };

// const user2: Obj<string> = {
//   name: "hi",
//   obj: "fdas",
// };

// difference of type and interface

// interface TestingInterface {
//   name: string;
//   age: number;
//   married?: boolean;
// }

// const testingObj: TestingInterface = {
//   name: "Rupak",
//   age: 10,
//   married: true,
// };

// type TestingType = {
//   name: string;
//   age: number;
// };

// const testingType: TestingType = {
//   name: "Ra",
//   age: 5,
// };

// interface Utils<T> {
//   name: string;
//   readonly email: string;
//   others: T;
// }

// const student1: Utils<number> = {
//   name: "Rupak",
//   email: "rakesh@gmail.com",
//   others: 15,
// };

// student1.name= "fdafdas"
// student1.email= "fdasfdsa"

// const student2: Utils<boolean> = {
//   name: "Rupak",
//   email: "rakesh@gmail.com",
//   others: true,
// };

// interface UserDetail {
//   father_name: string;
//   mother_name?: string | null;
// }

// const student3: Utils<UserDetail> = {
//   name: "Rakesh",
//   email: "rakesh@gmail.com",
//   others: {
//     father_name: "rakesh",
//     // mother_name: "sit",
//   },
// };

// null safety

// console.log(student1.others)

// interface Model {
//   getFun: () => number;
// }

// const test: Model = {
//   getFun: function (){
//     return "fd"
//   }
// }

//keyof
// interface Staff {
//   name: string;
//   salary: number;
// }
// type staffKeys = keyof Staff;


// typescript interface function
// interface FunctionInterface {
//   getFun: () => number;
// }

// const obj: FunctionInterface = {
//   getFun: function () {
//     return 5;
//   },
// };
