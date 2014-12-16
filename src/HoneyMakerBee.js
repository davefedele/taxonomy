var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
//or (with minor performance shift below)
//HoneyMakerBee.prototype = Object.create(new Bee());

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){this.honeyPot++};
HoneyMakerBee.prototype.giveHoney = function(){this.honeyPot--};