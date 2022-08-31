// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

// myNumArr.push("Hi"); 
// myStrArr.push(500);


// types and interface difference
// function in inteface
// utility types

