// B-1
// 챕터 1 :: 문제 A
//     ✓ 일꾼은 체력 10을 기본으로 갖는다. (1 ms)
//     ✓ 주니어 엔지니어는 일을 할때마다 1의 체력을 잃고, 1의 지능을 얻는다

//Worker = constructor 함수
function Worker(health) {
  this._health = health ?? 10; // _ practice to indicate that the property is intended to be private or internal to the object
}

// worker = instance
// new로 instance를 생성 시 { _health: 10 } 가 생성됨
// var worker = new Worker();

// console.log(worker);

function JuniorEngineer(health, intelligence) {
  this._super(health);
  this._intelligence = intelligence ?? 1;
  if (this._intelligence > 10) {
    this._isBornGenius = true;
  }
}

var juniorEngineer = new JuniorEngineer(5, 3);
console.log(juniorEngineer); //TypeError: this._super is not a function

////////////////
function Worker(health) {
  this._health = health ?? 10;
}

Worker.prototype.getHealth = function () {
  return this._health;
};

Worker.prototype.work = function () {
  this._health--;
};

function JuniorEngineer(health, intelligence) {
  Worker.call(this, health);
  this._intelligence = intelligence;
  if (this._intelligence > 10) {
    this._isBornGenius = true;
  }
}

JuniorEngineer.prototype = Object.create(Worker.prototype);
JuniorEngineer.prototype.constructor = JuniorEngineer;

JuniorEngineer.prototype.getIntelligence = function () {
  return this._intelligence;
};

JuniorEngineer.prototype.work = function () {
  Worker.prototype.work.call(this);
  this._intelligence++;
};
