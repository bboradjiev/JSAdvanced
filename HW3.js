// Class assigment

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}

class Manager extends Person {
  constructor(name, age, manages) {
    super(name, age);
    this.manages = manages;
  }
  greet() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old \n I manage ${this.manages}`
    );
  }
}

class Developer extends Person {
  constructor(name, age, skillset) {
    super(name, age);
    this.skillset = skillset;
  }
  greet() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old \n I know ${this.skillset}`
    );
  }
}

let maria = new Developer("Maria Popova", 23, ["Python", "Machine Learning"]);
let pesho = new Developer("Petar Petrov", 19, [
  "JavaScript",
  "Angular",
  "React",
  "Vue",
]);
let bill = new Manager("Bill Gates", 43, ["Maria Popova", "Petar Petrov"]);

maria.greet();
pesho.greet();
bill.greet();

// Sort Array assigment

const users = [
  "Maria",
  "Ada",
  "Ivan",
  "Petkan",
  "Aleksandur",
  "Boris",
  "Catelin",
];
const users2 = [
  "Maria",
  "Ada",
  "Ivan",
  "Petkan",
  "Aleksandur",
  "Boris",
  "Catelin",
];

const usersSortedAlphabetically1 = Object.assign([], users).sort(); //shallow copy
const usersSortedAlphabetically2 = JSON.parse(JSON.stringify(users2)).sort(); //deep copy

const numbers = [34632, 1, 5, 3, 5, 7, 23422, 424, 5326, 6231, 234];

const sortedNumbers = Object.assign([], numbers).sort((a, b) => a - b);

console.log(`users:\n\t${users}\n`);
console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically1}`);
console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically2}`);
console.log(sortedNumbers);

// Sort Object assigment

const todos = [
  {
    title: "Todo1",
    completed: true,
    priority: "low",
  },
  {
    title: "Todo2",
    completed: false,
    priority: "low",
  },
  {
    title: "Todo3",
    completed: true,
    priority: "high",
  },
  {
    title: "Todo4",
    completed: true,
    priority: "medium",
  },
  {
    title: "Todo5",
    completed: false,
    priority: "high",
  },
  {
    title: "Todo6",
    completed: true,
    priority: "low",
  },
];

const newTodo = Object.assign([], todos);

function sortArrayByKey(arr, sortBy) {
  const newArr = arr.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : -1;
  });
  return newArr;
}

console.log(sortArrayByKey(newTodo, "priority"));
console.log(todos);
