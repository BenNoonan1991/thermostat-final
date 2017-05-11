$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temp_number').text(thermostat.temperature);
});
