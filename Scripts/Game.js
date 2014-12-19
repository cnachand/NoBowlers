var weBowl = new WeBowl();

$(function() {

	$("#rollBall").click(function() {
		weBowl.roll(weBowl.getRollResult());
		$("<div><div>Current frame: "+weBowl.currentFrame()+"</div><div>You just knocked down "+weBowl.getLastRoll()+"</div><div>Your total score so far is: "+weBowl.score()+"</div></div>")
			.dialog({
				title: "Your Scoreboard"
			}).show();

		if (weBowl.gameFinished()) {
			weBowl.finishGame();
		}
	});
})
