var WeBowl = function(){
	this.rolls = [];
};

WeBowl.prototype.roll = function(pins){
	this.rolls.push(pins);
};

WeBowl.prototype.score = function(){
	var game = this;
	var score = 0;
	var rollIndex = 0;
	for (var frameIndex = 0; frameIndex < 10; frameIndex++){
		if (isStrike()){ //strike
			score += getStrikeScore();
			rollIndex++;
		}
		else if (isSpare()){ //spare
			score += getSpareScore();
			rollIndex += 2;
		}
		else{
			score += getStandardScore();
			rollIndex += 2;
		}
	}
	return score;

	function isStrike(){
		return game.rolls[rollIndex] == 10;
	}	
	
	function isSpare(){
		return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
	}
	
	function getStrikeScore(){
		var result;
		var rollSize = game.rolls.length;
		if (rollIndex == rollSize){
			result = game.rolls[rollIndex];
		} else if (rollIndex + 1 == rollSize){
			result = game.rolls[rollIndex] + game.rolls[rollIndex + 1];
		} else {
			result = game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
		}
		return result;
	}

	function getSpareScore(){
		return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
	}
	
	function getStandardScore(){
		return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
	}
};
