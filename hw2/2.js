const citiesAndCountries = {
  'Киев': 'Украина',
  'Нью-Йорк': 'США',
  'Амстердам': 'Нидерланды',
  'Берлин': 'Германия',
  'Париж': 'Франция',
  'Лиссабон': 'Португалия',
  'Вена': 'Австрия',
};

let resultArr = [];

for (const key in citiesAndCountries) {
  resultArr.push(`${key} - это ${citiesAndCountries[key]}`)
}
// console.log(resultArr);

// 2
function getArray() {
  const amount = 9;
  const num = 3;
  let res = [];
  let counter = 1;

  if (amount % num !== 0) return

  for (let i = 0; i < amount / num; i++) {
    res[i] = []
    for (let j = 0; j < num; j++) {
      res[i][j] = counter++
    }
  }
  // console.log(res);

}

getArray();


// 3

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay() {
  const lang = 'ru';
  const day = 5;
  let result = '';

  for (const key in namesOfDays) {
    if (key == lang) {
      result += namesOfDays[key][day - 1]
    }
  }

  // console.log(result);
}
getNameOfDay()

// 5


function arrToNum() {
	let arr = [1, 1, 1, 0, 0, 1];
	let number = '';
	for(let key of arr) {
		if (key !== 0 && key !== 1) {
			return;
		}
	}
	number = +arr.join('');

	return parseInt(number, 2);
}
console.log(arrToNum());
