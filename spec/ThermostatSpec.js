describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases temperature with up", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });
});
