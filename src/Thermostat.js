function Thermostat(){
this.temperature = 20;
this.minimumTemperature = 10;
this.powerSavingModeOn = true;
}

Thermostat.prototype.temperature = function(){
return this.temperature;
};

Thermostat.prototype.up = function () {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minimumTemperature){
    return  this.minimumTemperature;
  }
    this.temperature -=1;
};
