const findTheOldest = function (arr) {
  let currentYear = new Date().getFullYear();

  return arr.reduce((oldest, person) => {
    const deathYear = person.yearOfDeath || currentYear; // Use current year if yearOfDeath is undefined
    const age = deathYear - person.yearOfBirth;

    return age > (oldest.age || 0) ? { person, age } : oldest;
  }, {}).person;
};

// Do not edit below this line
module.exports = findTheOldest;
