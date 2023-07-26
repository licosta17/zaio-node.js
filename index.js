// const fs = require("fs")
// fs.writeFileSync("students.txt", "Hi, I am a student.")
// fs.appendFileSync("students.txt", "I am busy");

const studentUtils = require("./students");
const yargs = require("yargs");
// getStudents()
// var validator = require('validator');
// console.log(validator.isEmail('likhomadubela@gmail.com'));
// console.log(validator.isURL("www.zaio.io"));

const chalk = require("chalk");

// console.log(process.argv);
// console.log(yargs.argv);

// Adding a student
yargs.command({
  command: "add",
  description: "adding a student",
  builder: {
    name: {
      describe: "takes in student's fullname",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "takes in student's age",
      demandOption: true,
      type: "number",
    },
    class: {
      describe: "takes in student's class",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    console.log("Adding student...");
    studentUtils.addStudents(argv.name, argv.age, argv.class);
  },
});

// Removing a student
yargs.command({
  command: "remove",
  description: "removing a student",
  builder: {
    name: {
      describe: "takes in student's fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    studentUtils.removeStudents(argv.name);
  },
});

// Listing a student
yargs.command({
  command: "list",
  description: "listing all student",
  handler(argv) {
    console.log("Listing all students:");
    studentUtils.listStudents();
  },
});

// Reading a student
yargs.command({
  command: "read",
  description: "reading a student",
  builder: {
    name: {
      describe: "takes in student's fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("Reading a student...");
    studentUtils.readStudents(argv.name);
  },
});
yargs.argv;

// studentUtils.getStudents();

// const command = process.argv[2];

// if(command == "add"){
//     console.log("Adding a student")
// }else if(command == "remove"){
//     console.log("Removing a student")
// }
