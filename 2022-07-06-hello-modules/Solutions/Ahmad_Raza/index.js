const Student = require('./student');
const books = require('./books');
const ahmad = new Student('Ahmad', 20);
ahmad.addTeacher(1);
ahmad.addTeachersInBulk([3, 4]);


const ben = new Student('Ben', 21, [1, 2]);

const awais = new Student('Awais', 22, [3, 4]);

const siwan = new Student('Siwan', 23, [5]);

const anukool = new Student('Anukool', 24, [1, 2, 3, 4, 5]);


const students = [ahmad, ben, awais, siwan, anukool];

students.forEach(student => {
    console.log('\n');

    for (let teacher of student.getTeachersInDetail()) {
        console.log(`${student.name} is taking ${books.find(book => teacher.id === book.id).title} by ${teacher.name}`);
    }
});