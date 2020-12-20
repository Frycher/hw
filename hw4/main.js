//1 

class Student {
  static listOfStudents = [];
  static id = 1;

  constructor(obj) {
    for (const key in obj) {
      this[key] = obj[key]
    }
    this.id = Student.id++

    if (this.ratingPoint >= 800) {

      if (Student.listOfStudents.length < 5) {

        this.isSelfPayment = true;

      } else if (Student.listOfStudents.length >= 5) {

        let sortStudents = Student.listOfStudents.sort((a, b) => {
          if (a.ratingPoint == b.ratingPoint) {
            return b.schoolPoint - a.schoolPoint;
          }
        })
        if (this.ratingPoint >= sortStudents[5].ratingPoint) {
          this.isSelfPayment = true;
          sortStudents[5].isSelfPayment = false;
        } else if (this.ratingPoint == sortStudents[5].ratingPoint) {
          if (this.schoolPoint > sortStudents[5].schoolPoint) {
            this.isSelfPayment = true;
            sortStudents[5].isSelfPayment = false;
          }
        }
      }
    }

    Student.listOfStudents.push(this);
  }
}

const student = new Student(studentArr[0])
const student1 = new Student(studentArr[1])
const student2 = new Student(studentArr[2])
const student3 = new Student(studentArr[3])
const student4 = new Student(studentArr[4])
const student5 = new Student(studentArr[5])
const student6 = new Student(studentArr[6])
const student7 = new Student(studentArr[7])
const student8 = new Student(studentArr[8])
const student9 = new Student(studentArr[9])
const student10 = new Student(studentArr[10])
console.log(Student.listOfStudents);


///2
class CustomString {
  reverseString(str) {
    return str.split('').reverse().join('')
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ')
  }
}

const myString = new CustomString();
// console.log(myString.reverseString('qwerty'));
// console.log(myString.ucFirst('qwerty'));
// console.log(myString.ucWords('qwerty qwerty qwerty'));

//3

class Validator {
  checkIsDomain(domain) {
    let str = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
    return str.test(domain)
  }
  checkIsEmail(email) {
    let str = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return str.test(email)
  }
  checkIsDate(date) {
    let str = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
    return str.test(date)
  }
  checkIsPhone(num) {
    let str = /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/
    return str.test(num)
  }
}

const validate = new Validator();

// console.log(validate.checkIsDomain('google.com'));
// console.log(validate.checkIsEmail('vasya.pupkin@gmail.com'));
// console.log(validate.checkIsDate('30.11.2019'));
// console.log(validate.checkIsPhone('+38(044)537-14-28'));