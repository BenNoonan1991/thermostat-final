$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature(){
    $('#temp_number').text(thermostat.temperature);
  }

  $(document).ready(function() {
    updateTemperature();
  });

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function(){
    thermostat.reset_temp();
    updateTemperature();
  });

  $('#off').on('select', function(){
    thermostat.powerSavingModeOff();
    updateTemperature();

  $('#on').on('select', function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
  });
  });


  $('#energy').text(thermostat.getEnergy);
});
