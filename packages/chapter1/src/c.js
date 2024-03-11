// 생성자 함수는 수정하지 마세요
function Worker(health) {
  this._health = health ?? 10;
}

function JuniorEngineer(health, intelligence) {
  // this._super(health);
  Worker.call(this, health);
  this._intelligence = intelligence ?? 1;
  if (this._intelligence > 10) {
    this._isBornGenius = true;
  }
}
Worker.prototype.getHealth = function () {
  return this._health;
};

Worker.prototype.work = function () {
  this._health--;
};

JuniorEngineer.prototype = Object.create(Worker.prototype);
JuniorEngineer.prototype.constructor = JuniorEngineer;

JuniorEngineer.prototype.getIntelligence = function () {
  return this._intelligence;
};

JuniorEngineer.prototype.work = function () {
  Worker.prototype.work.call(this);
  this._intelligence++;
};

const result = new JuniorEngineer(100, 20);
result.work();
console.log(result);
