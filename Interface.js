$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  function updateTemperature(){
    $('#temp_number').text(thermostat.temperature);
  }


  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('select', function(){
    thermostat.reset_temp();
    updateTemperature();
  });

  $('#psm_on').on('click', function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
  });

  $('#psm_off').on('click', function(){
    thermostat.powerSavingModeOff();
    updateTemperature();
  });

  $('#energy').text(thermostat.getEnergy);
});
