const teachers_ = require('./teachers.js');

const teachers = [
    teachers_.Albert, teachers_.Krishna, teachers_.Nikola, teachers_.Salman, teachers_.Sachin
]

const books = require('./books.js');

const generateRandomIdWithFourSymbols = () => {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 4; i++) {
        id += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return id;
}


class Student {
    constructor(name, age, teacherIds = []) {
        this.id = generateRandomIdWithFourSymbols();
        this.name = name;
        this.age = age;
        this.teacherIds = teacherIds;
    }

    addTeachersInBulk(teacherIds) {
        this.teacherIds = Array.from(new Set([...teacherIds, ...this.teacherIds]));
    }

    addTeacher(teacherId) {
        this.teacherIds = Array.from(new Set([teacherId, ...this.teacherIds]));
    }

    removeTeacher(teacherId) {
        this.teacherIds = this.teacherIds.filter(id => id !== teacherId);
    }

    getTeachersInDetail() {
        return teachers.filter(teacher => this.teacherIds.includes(teacher.id));
    }

    getAllBooks() {
        const teachersInDetail = this.getTeachersInDetail();
        return teachersInDetail.map(teacher => books.find(book => book.id === teacher.bookId));
    }

}

module.exports = Student;