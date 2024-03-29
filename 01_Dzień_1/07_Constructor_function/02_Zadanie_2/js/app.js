const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function (newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};

const r1 = new Robot('R2D2');
r1.sayHi('CP3');
r1.changeName('R3D3');
r1.fixIt();
r1.sayHi('CP3');