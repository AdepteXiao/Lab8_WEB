let student1 = {
    name: 'Bob',
    age: 21,
    say: (au) => {
        console.log('А может все таки в академ?');
    }
}

let student2 = new Object();
student2.name = 'Nick';
student2.age = 20;
student2.say = (au) => {
    console.log('Писать лабы писать лабы писать лабы');
}

function Student(name, age, say) {
    this.name = name;
    this.age = age;
    this.say = (au) => console.log(say);
}

let student3 = new Student('Boris', 12, 'Фу, матеша сложная!')

student1.say()
student2.say()
student3.say()

student3.name = "Kid"
let student2_name = student2.name
console.log(`Проверка доступа: ${student3.name}, ${student2_name}`)


Array.prototype.average = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return Math.round(sum / this.length);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.average());
