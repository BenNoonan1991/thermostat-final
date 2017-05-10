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
  it('returns error if temperature is less than 10', function() {
    for(var i = 0; i<11; i++){
    thermostat.down();}
    expect(thermostat.temperature).toEqual(10);
  });

  it('powersaving mode is on by default', function() {
    expect(thermostat.powerSavingModeOn()).toBe(true);
  });

  it('can turn off powersaving mode', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingModeOn()).toBe(false);
  });

  it('max temperature is 25 when PSM is on', function() {
    thermostat.powerSavingModeOn();
    for(var i = 0; i < 6; i++){
    thermostat.up();}
    expect(thermostat.temperature).toEqual(25);
  });

  it('max temperature is 32 when PSM is off', function() {
    thermostat.powerSavingModeOff();
    for(var i = 0; i < 13; i++){
    thermostat.up();}
    expect(thermostat.temperature).toEqual(32);
  });

  it('resets the temperature to 20', function(){
    thermostat.up();
    thermostat.reset_temp();
    expect(thermostat.temperature).toEqual(20);
  })
});
