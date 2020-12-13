// 1
const Emploee = function (arr) {
  for (const key in arr) {
    this[key] = arr[key]
  }
  Object.defineProperty(this, 'fullInfo', {
    get: function () {
      return this;
    },
    // set: function (value) {
    //   this = value;
    // }
  })
}

const employeeObj = new Emploee(emplyeeArr[2]);
// console.log(employeeObj);

//2
Emploee.prototype.getFullName = function () {
  return `${this.surname} ${this.name}`
}

// console.log(employeeObj.getFullName());

// 
let createEmployesFromArr = (arr) => {
  let newArr = [];

  for (const key in arr) {
    newArr.push(new Emploee(arr[key]))
  }
  return newArr
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
// console.log(emplyeeConstructArr);


//4

const getFullNamesFromArr = (arr) => {
  let newArr = []
  for (const key in arr) {
    newArr.push(arr[key].getFullName())
  }
  return newArr
}

// console.log(getFullNamesFromArr(emplyeeConstructArr));

//5

const getMiddleSalary = (arr) => {
  let summ = 0
  let middle = +(summ / arr.length).toFixed()

  for (const key in arr) {
    summ = summ + arr[key].salary
  }
  return middle
}

// console.log(getMiddleSalary(emplyeeConstructArr) );

//6
const getRandomEmployee = (arr) => {
  let empl = +(Math.random() * arr.length).toFixed()
  if (empl) {
    empl = ~~(empl / 2)
  }
  return arr[empl]
}

// console.log(getRandomEmployee(emplyeeConstructArr));


//7 