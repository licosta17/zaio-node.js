const fs = require("fs");
const chalk = require("chalk");

const getStudents = () => {
    console.log("Getting Students");
}
const addStudents = (name,age,Class) => {

    const students = loadStudents();

    const duplicateData = students.filter((student) => student.name === name)

    if (duplicateData.length === 0){
        students.push({
            name:name,
            age:age,
            class:Class
        })
    
        saveStudents(students);
        console.log(chalk.green("Added a student"))
    }else{
        console.log("Record already in system")
    }
}

const removeStudents = (name) => {

    const students = loadStudents();

    const newStudents = students.filter((student) => student.name !== name)

    saveStudents(newStudents);

    if(students.length > newStudents.length){
        console.log(chalk.green(name + " removed."))
    }else{
        console.log(chalk.red("No such student found"))
    }
}

const listStudents = () => {

    const students = loadStudents();
    
    students.forEach(students => {
        console.log("Name: " + students.name + ", Age: " + students.age + ", Class: " + students.class)
    });
}

const readStudents = (name) => {

    const students = loadStudents();

    const foundStudent = students.find(student => student.name === name);
    if(foundStudent){
        console.log(chalk.green("Student found!"));
        console.log("Name: " + foundStudent.name + ", Age: " + foundStudent.age + ", Class: " + foundStudent.class)
    }else{
        console.log(chalk.red("No student found!"));
    }
}

const loadStudents = () => {

    try{
    const dataBuffer = fs.readFileSync("students.json")
    const JSONdata = JSON.parse(dataBuffer.toString())
    return JSONdata;

    }catch(e) {
        return[]
    }
}

const saveStudents = (students) => {
    const stringData = JSON.stringify(students);
    fs.writeFileSync("students.json", stringData)
}
// console.log(loadStudents())

module.exports = {
    getStudents:getStudents,
    addStudents:addStudents,
    removeStudents:removeStudents,
    listStudents:listStudents,
    readStudents:readStudents
}
