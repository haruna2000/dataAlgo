function hashTable() {
  let table = [];
  let tableCapacity = 5;
  let hash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % tableCapacity;
  };

  this.print = () => {
    console.log(table);
  };

  this.get = (key) => {
    let index = hash(key);
    if (table[index]) {
      return table[index].find((e) => e[0] === key);
    }
    return "undfind";
  };
  this.set = (key, value) => {
    let index = hash(key);
    if (table[index]) {
      return table[index].push([key, value]);
    }
    return (table[index] = [[key, value]]);
  };
  this.remove = (key) => {
    let index = hash(key);
    if (table[index]) {
      for (let i = 0; i < table[index].length; i++) {
        if (table[index][i][0] === key) table[index].splice(0, 1);
        return;
      }
      return "item key not  found";
    }
  };
}

let table = new hashTable();
table.set("fname", "haruna");
table.set("lash", "haruna");
table.set("age", 88);
table.set("level", 300);
console.log(table.get("age"));
console.log(table.remove("age"));
table.print();
