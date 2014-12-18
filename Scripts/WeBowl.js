///WeBowl
var WeBowl = function(){
	this.rolls = [];
}

WeBowl.prototype.roll = function(pins){
	this.rolls.push(pins);
};

WeBowl.prototype.score = function(){
	var score = 0;
	for (i = 0; i < 20; i++){
		score += this.rolls[i];
	}
	return score;
};