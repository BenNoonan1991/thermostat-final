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
  });

  $('#psm_off').on('click', function(){
    thermostat.powerSavingModeOff();
    updateTemperature();
  });

  // $('#select-city').submit(function(event){
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c0b6c7e54c92e31933df2561e6117e25&units=metric', function(data) {
  //     $('#current-outdoor-temperature').text(data.main.temp);
  //   });
  // });

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
