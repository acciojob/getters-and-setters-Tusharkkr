//complete this code
class Person {
	constructor(name,age){
        this._name = name
        this._age = age
		this.name = name
        this.age = age
    }
    name(){
       return this._name
    }
    age(){
        return this._age
    }
}

class Student extends Person {
	constructor(name,age){
        super()
        this.name = name
        this.age = age
    }
    study(){
        console.log(`${this.name} is studying`) 
    }
}

class Teacher extends Person {
	constructor(name,age){
        super()
        this.name = name
        this.age = age
    }
    teach(){
        console.log(`${this.name} is teaching`)
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
