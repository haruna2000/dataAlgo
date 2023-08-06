let newArray = [1, 2, 3, "boy", true];
newArray[3] = 33;
newArray.pop();
newArray.shift();
newArray.push(54);
newArray.unshift(23);
console.log(newArray);

let obj = {
  name: "Ali",
  age: 22,
  male: true,
  sayHello() {
    return this.name + " how are you doing?";
  },
};
obj.age = 255;
console.log(obj["name"]);
console.log((obj["name"] = "Brush"));
console.log(obj.sayHello());
console.log(obj);
let keys = Object.entries(obj);
console.log(keys);

// for (let item in newArray) {
//   console.log(item);
// }
// for ( let item of Object.entries( obj ) ) {

//     console.log(item)
// }
let set = new Set([1, 2, 3]);
for (let item of set) {
  console.log(item);
}

for (let item of set.entries()) {
  console.log(item);
}
