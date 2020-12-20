const counter = () => {
  let res = 0;
  return (num) => {
    res += num
    return res
  }
}

const getSumm = counter()

// 2
const getUpdatedArr = () => {
  let newArr = [];
  return (num) => {
    if (!num) {
      return newArr = []
    }
    newArr.push(num)
    return newArr
  }
}
const upArr = getUpdatedArr()

//3 

const getTime = () => {
  let str = 'Enabled';
  return (time) => {
    setTimeout(() => {
      str = new Date().getSeconds()
    }, 0)
    return str;
  }
}
const timefoo = getTime();

//4 

