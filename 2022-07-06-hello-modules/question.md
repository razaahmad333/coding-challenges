# Hello Modules
## Your first javascript code in terminal.

### [I have written a blog post about modules](https://ahmadrazakhan946.hashnode.dev/your-first-javascript-code-in-terminal).

#### You can attempt this challenge if you know what a `module` is.

## Here is the challenge

### do
```shell
npm init -y
```

### and make four files <br>
* `index.js` 
* `student.js` 
* `teachers.js` 
* `books.js` 

### in `books.js` make an array of objects called `books` with the following properties:
* `id`
* `title`
* `author`
* `pages`
#### and export this array of objects.
`module.exports = books;` <br>


### in `teachers.js` make an array of objects called `teachers` with the following properties:
* `id`
* `name`
* `age`
* `bookId`
#### and export this array of objects.
`module.exports = teachers;` <br>

### in `student.js` define a class called `Student` with the following properties:
* `id`
* `name`
* `age`
* `teacherIds` an array of teacherId

#### and export this class.
`module.exports = Student;` <br>

### in `index.js` import the class you created in `student.js`
`const Student = require('./student.js');` <br>

#### you can use any module in any module you want (means you can do require() in any file of any file).
#### then create 5 students and console log the books they have to study with the name of teacher.

### how it is possible 
* students have ids of teachers they want to study with.
* teachers have id of book they want to teach.



<br/>
<br/>

# How do I submit my solution?

- ### [click here to learn how to submit your solution](https://github.com/razaahmad333/coding-challenges/blob/main/CONTRIBUTING.md)

<br>

> ### want solutions
>
> [click here to get solution by me](https://github.com/razaahmad333/coding-challenges/tree/main/2022-07-06-hello-modules/Solutions/Ahmad_Raza)

or you can checkout solutions by other people in dir given below

[2022-07-06-hello-modules/Solutions](https://github.com/razaahmad333/coding-challenges/tree/main/2022-07-06-hello-modules/Solutions)

### question is incomplete?
[raise an issue](https://github.com/razaahmad333/coding-challenges/issues/new)


