// function Worker(health) {
//   this._health = health ?? 10;
// }

// function JuniorEngineer(health, intelligence) {
//   Worker.call(this, health);
//   this._intelligence = intelligence ?? 1;
//   if (this._intelligence > 10) {
//     this._isBornGenius = true;
//   }
// }

// Worker.prototype.getHealth = function () {
//   Worker.prototype.work.call(this);
//   return this._health;
// };
// Worker.prototype.work = function () {
//   return this._health--;
// };

// JuniorEngineer.prototype = Object.create(Worker.prototype);

// JuniorEngineer.prototype.getIntelligence = function () {
//   return this._intelligence;
// };

// JuniorEngineer.prototype.work = function () {
//   Worker.prototype.work.call(this);
//   this._intelligence++;
// };

// console.log(JuniorEngineer.prototype);

// var juniorEngineer = new JuniorEngineer(10, 5);

// for (let i = 0; i < 5; i++) {
//   juniorEngineer.work();
// }
