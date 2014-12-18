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

describe("WeBowl2", function() {
	var game;

	beforeEach(function(){
		game = new WeBowl();
	});

	it("Can throw gutter game", function(){
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);
		game.roll2(game.newFrame(), 0, 0);

		expect(game.score2()).toBe(0);
	});

	it("Can throw perfect game", function() {
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 0);
		game.roll2(game.newFrame(), 10, 10, 10);

		expect(game.score2()).toBe(300);
	});

	it("Can roll a score of 20", function() {
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);

		expect(game.score2()).toBe(20);
	});

	it("Can roll a score of 15", function() {
		game.roll2(game.newFrame(), 0, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 0);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 0, 1);
		game.roll2(game.newFrame(), 1, 1);
		game.roll2(game.newFrame(), 0, 1);
		game.roll2(game.newFrame(), 1, 0);
		game.roll2(game.newFrame(), 1, 1);

		expect(game.score2()).toBe(15);
	});
});
