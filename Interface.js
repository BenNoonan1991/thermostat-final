$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  function updateTemperature(){
    $('#temp_number').text(thermostat.temperature);
    $('#temp_number').attr('class', thermostat.getEnergy());
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

  $('#psm_on').on('click', function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
    $('#power-saving-status').text(thermostat.powerSavingMode);
  });

  $('#psm_off').on('click', function(){
    thermostat.powerSavingModeOff();
    updateTemperature();
    $('#power-saving-status').text(thermostat.powerSavingMode);
  });

  $('#power-saving-status').text(thermostat.powerSavingMode);

  displayWeather('London');
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=c0b6c7e54c92e31933df2561e6117e25';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-outdoor-temperature').text(data.main.temp);
    });
  }

  $('#energy').text(thermostat.getEnergy);
});
