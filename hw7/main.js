//1
const searchCandidatesByPhoneNumber = phone => {
  let itemPhone = null;
  const newArr = condidateArr.filter(item => {
    itemPhone = item.phone
    return itemPhone.includes(phone)
  })
  return newArr

}
// console.log(searchCandidatesByPhoneNumber('+1 (89'));

//2 
const getCandidateById = id => {
  let itemID = null;
  let registr = null;
  let registrYear = null;
  let registrMonth = null;
  let registrDay = null;
  let fullDate = null;
  const newArr = condidateArr.filter(item => {
    itemID = item._id
    registr = item.registered.split('-');
    registrYear = registr[0];
    registrMonth = registr[1];
    registrDay = registr[2].slice(0, 2);

    fullDate = `${registrDay}/${registrMonth}/${registrYear}`;
    item.registered = fullDate
    return itemID.includes(id)
  })
  return newArr;
}

// console.log(getCandidateById('5e216bc9a6059760578aefa4'));


// 3
const sortCandidatesArr = sortBy => {

  if (!sortBy) {
    return [...condidateArr];
  }

  if (sortBy == "asc") {
    return [...condidateArr].sort((a, b) =>
      a.balance.replace(/[$,.]/g, '') - b.balance.replace(/[$,.]/g, '')
    );
  } else if (sortBy == "desc") {
    return [...condidateArr].sort((a, b) =>
      b.balance.replace(/[$,.]/g, '') - a.balance.replace(/[$,.]/g, '')
    );
  }

}
// console.log(sortCandidatesArr());
// console.log(sortCandidatesArr('desc'));
// console.log(sortCandidatesArr('asc'));

//4 