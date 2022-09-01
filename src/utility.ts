//Partial
// type Testing = {
//   x: string;
//   y: string;
// };

// const test: Testing = {
//   x: "",
//   y: "",
// };

// type TestingPartial = Partial<Testing>;

// const testParial: TestingPartial = {
//   x: "fdsa",
// };

//Record

// const recordObj: Record<"rakesh" | "suresh", number> = {
//   suresh: 85,
//   rakesh: 485,
// };

// const recordObj: { [key: string]: string } = {
//   fadsdf: "fdas",
// };

// Omit

// interface Student {
//   class: string;
//   age: number;
//   address: string;
// }

// type StudentMinus = Omit<Student, "address" | "age">;

// const student: StudentMinus = {
//   class: "fdsafd",
// //   age: 2,
// };

//Pick

// interface Student {
//   class: string;
//   age: number;
//   address: string;
// }

// type StudentPick = Pick<Student, "age">;

// const studentPick: StudentPick = {
//   age: 8,
// };

//Exclude

// type Primitive = string | number | boolean;

// type Excluded = Exclude<Primitive, string>;
