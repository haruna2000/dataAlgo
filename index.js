// function hashCode(key, tableCapacity) {
//   let hash = 17;
//   for (let i = 0; i < key.length; i++) {
//     hash = hash * key.charCodeAt(i);
//   }
//   //   console.log(hash % tableCapacity);
//   return hash % tableCapacity;
// }
// class hashTable {
//   table = new Array(3);
//   size = 0;
//   setItem = (key, value) => {
//     let index = hashCode(key, this.table.length);
//     // for update
//     if (this.table[index]) {
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] === key) {
//           this.table[index][i][1] === value;
//           return;
//         }
//         //chain
//       }
//       return this.table[index].push([key, value]);
//     } else {
//       //bucket
//       this.table[index] = [[key, value]];
//     }
//   };
//   getItem = (key) => {
//     let index = hashCode(key, this.table.length);
//     if (this.table[index]) {
//       return this.table[index].find((i) => i[0] === key);
//     }
//     return -1;
//   };
//   removeItem = (key) => {
//     let index = hashCode(key, this.table.length);
//     if (this.table[index] && this.table.length) {
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] === key) {
//           this.table[index].splice(i, 1);
//         }
//       }
//       return true;
//     }
//     return false;
//   };

//   displayItems() {
//     this.table.forEach((value, index) => {
//       let vvalue = value.map((vvalue) => {
//         return vvalue;
//       });
//       console.log(`${index}     ${value}`);
//     });
//   }
// }
// const table1 = new hashTable();
// table1.setItem("fname", "haruna");
// table1.setItem("lname", "sadiq");
// table1.setItem("lname", "sadiq");
// table1.setItem("age", "19");
// table1.setItem("age", "19");
// table1.setItem("dataBirth", "1/2/3");
// console.log(table1.displayItems());
// // console.log(table1.removeItem("fname"));
// // console.log(table1.getItem("lname"));

// console.log(table1.table);

// class HashTable {
//   constructor() {
//     this.table = new Array(5);
//     this.size = 0;
//   }
//   _tc() {
//     return this.table.length;
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//       }

//     // console.log(hash % this._tc());
//     return hash % this._tc();
//   }
//   get(key) {
//     let index = this._hash(key);
//     if (this.table[index]) {
//       return this.table[index].find((e) => e[0] === key);
//     } else {
//       return "not found";
//     }
//     //   return this.table[key];
//   }
//     set( key, value ) {
//     //   let sizeFactor = this.size/this.table.length
//     let index = this._hash(key);
//     if (this.table[index]) {
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] == key) {
//           this.table[index][i][1] = value;
//           //   console.log("value changed" + " " + value);
//           return;
//         }
//       }

//       //chatting values
//       this.size++;
//       return this.table[index].push([key, value]);
//     }
//     //new value
//     this.table[index] = [[key, value]];
//     this.size++;
//   }

//   remove(key) {
//     let index = this._hash(key);
//     if (this.table[index]) {
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] === key) {
//           this.table[index].splice(i, 1);
//           this.size--;
//           return true;
//         }
//       }
//     }
//     console.log("key not found");
//     return false;
//   }
//   display() {
//     let data = [];
//     this.table.forEach((indexKey, index) => {
//       let entry = indexKey.map((value) => ` ${value[0]} = ${value[1]}`);
//       data.push(`${index}   = ${entry}`);
//     });
//     return data;
//   }
// }

// let data1 = new HashTable();
// data1.set("fname", "haruna");
// data1.set("lname", "sadiq");
// data1.set("lname", "ahamed ");
// data1.set("school", "atbu");
// data1.set("level", 300);
// data1.set("age", 99);
// data1.set("hight", 4.5);
// console.log(data1.size);
// // console.log(data1.remove("age"));
// console.log(data1.table);
// console.log(data1.display());
// console.log(data1.size);
