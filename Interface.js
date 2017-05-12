
var thermostat = new Thermostat();

function updateTemperature(){
  $('#temp_number').text(thermostat.temperature);
}

$(document).ready(function() {
  updateTemperature();
});

$('#up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
});

$('#down').on('click', function(){
  thermostat.down();
  updateTemperature();
});

$('#reset').on('click', function(){
  thermostat.reset_temp();
  updateTemperature();
});

$ ('#on').on('select', function(){
 thermostat.powerSavingModeOn();
 updateTemperature();
 });

 $ ('#off').on('select', function(){
  thermostat.powerSavingModeOff();
  updateTemperature();
  });


$(document).ready(function() {
$('#energy').text(thermostat.getEnergy);
});
