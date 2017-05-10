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
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature with down', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it('returns error if temperature is less than 10', function(){
    for(var i = 0; i<11; i++){
    thermostat.down();}
    expect(thermostat.temperature).toEqual(10);
  });
});
