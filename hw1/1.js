//1

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log('fizzbuzz')
  } else if (i % 2 === 0) {
    console.log('fizz')
  } else {
    console.log('buzz')
  }
}
// 2
const number = 7;
let total = 1;
for (i = 0; i <= number; i++) {

  total = total * (number - i);
  // console.log(total);
}
// 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let res;
let amount;
amount = consumptionPerWeek * weeksAmount
res = (amount - amount % sheetsInReamPaper) / sheetsInReamPaper;
console.log(res);


// 4
// function test () {

// }


// 5

const medianNumber = 6
let octothorpe = "#";

for (let i = 0; i < medianNumber; i++) {

  const countNum = medianNumber * 2 - 1 * octothorpe.length;
  let line = ''

  for (let j = 1; j <= countNum; j++) {

    if (j === medianNumber - i) {
      line += octothorpe;
      octothorpe += "##"
      continue;
    }

    line += '-';
  }
  console.log(line);
}