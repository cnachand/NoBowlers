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

	var rollMany = function(pins, rolls){
		for(var i = 0; i < rolls; i++){
			game.roll(pins);
		}
	};
});
