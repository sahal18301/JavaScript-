class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  showGrade() {
    console.log("Grade: " + this.grade);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  showSubject() {
    console.log("Subject: " + this.subject);
  }
}

var student1 = new Student("Ali", 16, "A");
var teacher1 = new Teacher("Mr. Hassan", 40, "Mathematics");

student1.showInfo();
student1.showGrade();

console.log("----------------");

teacher1.showInfo();
teacher1.showSubject();
