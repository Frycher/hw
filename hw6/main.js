const arr = ['Vasya', 'Petya', 'Alexey']
const removeUser = (arr, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      arr.splice(i, 1);
    }
  }
}
removeUser(arr, 0)
// console.log(arr)

// 2
const obj1 = {
  name: 'Vasya',
  age: 1
}
const getAllKeys = (obj) => {
  return Object.keys(obj)
}
// console.log(getAllKeys(obj1))

// 3
const obj2 = {
  name: 'Vasya',
  age: 1
}
const getAllValues = (obj) => {
  return Object.values(obj)
}
// console.log(getAllValues(obj2))

//4

const first = {
  id: 3,
  name: 'Vasya'
}
const secondObj = {
  id: 4,
  name: 'Katya'
}

const insertIntoarr = (obj, id) => {
  let newArr = []
  let objID = 0;
  for (const key in condidateArr) {
    // objID = condidateArr[key].index
    console.log(condidateArr[key]);
    if ( objID == id) {
      condidateArr.unshift(obj)

    }
  }
  return newArr
}
console.log(insertIntoarr(first, 3));
console.log(insertIntoarr(secondObj, 2));

// 5
class Condidate {
  constructor(obj) {
    for (const key in obj) {
      this[key] = obj[key]
    }
    Object.defineProperty(this, 'state', {
      get: function() {
        return this.address.split(',').slice(2,3).join('')
      }
    })
  }
}
const condidate = new Condidate(condidateArr[0])
// console.log(condidate.state);

//6 
const getCompanyNames = (arr) => {
  let newArr = []
  arr.forEach((item, index) => {
    let itemCompany = item.company
    if (!newArr.includes(itemCompany)) {
      newArr.push(itemCompany);
    }
  })
  return newArr
}
// console.log(getCompanyNames(condidateArr));

//7 
const getUsersByYear = (num) => {
  let newArr = []
  condidateArr.forEach(item => {
    let sliceYear = Number(item.registered.split('-').slice(0,1).join(''))
    if(num === sliceYear) {
      newArr.push(item._id)
    }
  })
  return newArr
}
// console.log(getUsersByYear(2015));

//8 
const getCondidatesByUnreadMsg = (num) => {
  let newArr = []
  condidateArr.forEach(item => {
    let itemNum = Number(item.greeting.replace(/\D+/g, ''))
    if(num === itemNum) {
      newArr.push(item)
    }
  })
  return newArr
}
// console.log(getCondidatesByUnreadMsg(8));

//9 
const getCondidatesByGender = (gender) => {
  let newArr = []
  condidateArr.filter(item => {
    if (item.gender == gender) {
      newArr.push(item)
    }
  })
  return newArr
}
// console.log(getCondidatesByGender('female'));


