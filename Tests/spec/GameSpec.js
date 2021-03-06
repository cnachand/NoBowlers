describe("Testing Jasmine", function() {
  it("Will test to make sure true = true", function() {
    expect(true).toBe(true);
  });
  it("Will test to make sure true = false", function() {
    expect(true).toBe(false);
  });
});

describe("WeBowl Game", function(){
	var game;
	
	beforeEach(function(){
		game = new WeBowl();
	});
	
	//it("Can launch game", function(){
	//	var game = new WeBowl();
	//});
	
	it("Can throw gutter game", function(){
		//var game = new WeBowl();
		// for (var i = 0; i < 20; i++){
			// game.roll(0);
		// }
		rollMany(0,20);
		expect(game.score()).toBe(0);
	});
	
	it("Can throw all ones", function(){
		//var game = new WeBowl();
		// for(var i = 0; i < 20; i++){
			// //game.roll(1);
		// }
		rollMany(1,20);
		expect(game.score()).toBe(20);
	});

	it("Can throw a strike", function(){
		game.roll(10);
		rollMany(0,18);
		expect(game.score()).toBe(10);
	});
	
	it("Can throw various frames", function(){
		game.roll(10);
		rollMany(1,18);
		expect(game.score()).toBe(30);
	});
	
	it("Can throw perfect game", function (){
		rollMany(10,12);
		expect(game.score()).toBe(300);
	});

	it("Can get the current frame of 3", function() {
		game.roll(10);
		game.roll(7);
		game.roll(3);
		game.roll(4);

		expect(game.currentFrame()).toBe(3);
	});

	it("Can get the current frame of 7", function() {
		game.roll(10);	//1
		game.roll(7);	//2
		game.roll(3);
		game.roll(4);	//3
		game.roll(3);
		game.roll(10);	//4
		game.roll(1);	//5
		game.roll(1);
		game.roll(10);	//6
		game.roll(5);	//7

		expect(game.currentFrame()).toBe(7);
	});

	var rollMany = function(pins, rolls){
		for(var i = 0; i < rolls; i++){
			game.roll(pins);
		}
	};
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
