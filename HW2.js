function Person(age, name) {
    this.age = age;
    this.name = name;
  };
  
  Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
  
  function Manager(name, age, managees) {
    Person.call(this, name, age);
    this.managees = managees;
  }
  
  Manager.prototype = Object.create(Person.prototype);
  Manager.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old \n I manage ${this.managees}`);
  }
  
  function Developer(name, age, skillset) {
    Person.call(this, name, age);
    this.skillset = skillset;
   }
  
   Developer.prototype= Object.create(Person.prototype);
   Developer.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old \n I know ${this.skillset}`);
  };
  
  let maria = new Developer("Maria Popova", 23, ["Python", "Machine Learning"]);
  let pesho = new Developer("Petar Petrov", 19, [  "JavaScript",  "Angular",  "React",  "Vue",]);
  let bill = new Manager("Bill Gates", 43, ["Maria Popova", "Petar Petrov"]);
  
  maria.greet();
  pesho.greet();
  bill.greet();
  
   
  // second assigment 

  function User(userName) {
    this.userName = userName
  }
  User.prototype.greet = function () {
    console.log(`Hi, I'm ${this.userName}`);
  }
  
  const pesho = new User('Peter');
  
  pesho.greet();
  
  setTimeout(function(){
    pesho.greet()
  }, 2000);
  
