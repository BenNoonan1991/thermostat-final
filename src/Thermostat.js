function Thermostat(){
this.temperature = 20;
this.minimumTemperature = 10;
this.powerSavingMode = true;
this.MAX_TEMP_PSM_ON = 25;
this.MAX_TEMP_PSM_OFF = 32;
}

Thermostat.prototype.temperature = function(){
return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaxTemp())
  {return this.temperature;}
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minimumTemperature){
    return  this.minimumTemperature;
  }
    this.temperature -=1;
};

Thermostat.prototype.reset_temp = function () {
  this.temperature = 20;
};

Thermostat.prototype.powerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.powerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.isMaxTemp = function () {
  if (this.powerSavingMode === true)
    {return this.temperature === this.MAX_TEMP_PSM_ON;}
  return this.temperature === this.MAX_TEMP_PSM_OFF;
 };
