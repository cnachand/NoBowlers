///WeBowl
var WeBowl = function(){
	this.rolls = [];

	// NT and RV code
	this.frames = [];
	this.emptyFrame = {
		firstRollPins: -1,
		secondRollPins: -1,
		thirdRollPins: -1,
		frameScore: -1,
        isStrike: function(){
        	if (this.firstRollPins == 10) return true;
        },
        isSpare: function(){
        	if (this.firstRollPins + this.secondRollPins == 10) return true;
        }
	};
};

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

WeBowl.prototype.clone = function(obj) {
    var that = this;
    var temp = function temporary() { return that.apply(obj, arguments); };
    for(var key in obj) {
        if (obj.hasOwnProperty(key)) {
            temp[key] = obj[key];
        }
    }
    return temp;
};

WeBowl.prototype.newFrame = function() {
	return this.clone(this.emptyFrame);
}

WeBowl.prototype.roll2 = function(frame, firstpins, secondpins, thirdpins) {
	frame.firstRollPins = firstpins;
	frame.secondRollPins = secondpins;
	frame.thirdRollPins = thirdpins;

	this.frames.push(frame);
};
WeBowl.prototype.score2 = function() {
	var score = 0;
	for (var i = 0; i < this.frames.length; i++) {
		var frame = this.frames[i];
		if (frame.isStrike()) {
			if (this.frames.indexOf(frame) == this.frames.length - 1) {
				frame.frameScore = frame.firstRollPins + frame.secondRollPins + frame.thirdRollPins;
			}
			else {
				var nextframe = this.frames[i+1];
				if (!nextframe.isStrike()) {
					frame.frameScore = nextframe.firstRollPins+nextframe.secondRollPins+10;
				}
				else {
					if (this.frames.indexOf(nextframe) == this.frames.length - 1)
						frame.frameScore = nextframe.firstRollPins + nextframe.secondRollPins + 10;
					else {
						var nextnextframe = this.frames[i+2];
						frame.frameScore = nextnextframe.firstRollPins+20;
					}
				}
			}
		} 
		else if (frame.isSpare()) {
			if (this.frames.indexOf(frame) == this.frames.length - 1) {
				frame.frameScore = 20;
			}
			else {
				var nextframe = this.frames[i+1];
				frame.frameScore = nextframe.firstRollPins + 10;
			}
		}
		else{
			frame.frameScore = frame.firstRollPins + frame.secondRollPins;
		}
		score += frame.frameScore;
	}

	return score;
};