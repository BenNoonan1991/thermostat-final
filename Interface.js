$(document).ready(function() {
  console.log($('#psm_off'));
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

  $('#reset').on('click', function(){
    thermostat.reset_temp();
    updateTemperature();
  });

  $('#off').on('click', function(){
    console.log('off')
    thermostat.powerSavingModeOff();
    updateTemperature();
  });

  $('#on').on('click', function(){
    console.log('on')
    thermostat.powerSavingModeOn();
    updateTemperature();
  });

  $('#psm_off').on('click', function(){
    thermostat.powerSavingModeOff();
    updateTemperature();
  });



$('#energy').text(thermostat.getEnergy);
});
