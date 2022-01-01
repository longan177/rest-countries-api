const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

console.log(
  `${Mark.fullName} BMI ${Mark.calcBMI()} is ${
    Mark.calcBMI() - John.calcBMI() > 0 ? "higher" : "lower"
  } than ${John.fullName}'s (${John.calcBMI()}) !`
);
