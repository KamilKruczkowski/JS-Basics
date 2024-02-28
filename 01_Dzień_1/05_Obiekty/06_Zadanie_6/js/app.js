const spoon = {
  isExist: true,
};

const fork = spoon;
fork.isExist = false;
console.log("Czy łyżka istnieje?", spoon.isExist);