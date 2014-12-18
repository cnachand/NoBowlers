describe("Testing Jasmine", function() {
  it("Will test to make sure true = true", function() {
    expect(true).toBe(true);
  });
  it("Will test to make sure true = false", function() {
    expect(true).toBe(false);
  });
});

describe("WeBowl", function(){
	var game;
	
	beforeEach(function(){
		game = new WeBowl();
	});
	
	//it("Can launch game", function(){
	//	var game = new WeBowl();
	//});
	
	it("Can throw gutter game", function(){
		//var game = new WeBowl();
		for (var i = 0; i < 20; i++){
			game.roll(0);
		}
		expect(game.score()).toBe(0);
	});
	
	it("Can throw all ones", function(){
		//var game = new WeBowl();
		for(var i = 0; i < 20; i++){
			game.roll(1);
		}
		expect(game.score()).toBe(20);
	});
});
