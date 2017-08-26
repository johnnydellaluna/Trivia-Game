window.onload = function() {
	var time = 60;
    $("#displaytime").text("Time remaining: " + time);
        var count = setInterval(function(){
            time--;
            $("#displaytime").text("Time remaining: " + time)
		}, 1000);

		var clearInterval = stop.count

        if (time === 0) {
        	clearInterval(time);
        }

// Setting up countdown from 60. Stopping at 0.

var questions = [];
var answers = ["q1a", "q1b", "q1d", "q2a", "q2b", "q2c", "q3b", "q3c", "q3d", "q4a", "q4b", "q4c", "q5a", "q5c", "q5d"];
var correctAnswers = ["q1c", "q2d", "q3a", "q4d", "q5b"];
var right = 0;
var wrong = 0;

// Creating vars of right and all answers based on the ids of the radio buttons in HTML.

    if ($('input[id]:checked').val() === correctAnswers[i]){

        right++;

    } else {

        wrong++;
    }

    $('type:button').on("click", function () {
        event.preventDefault();
        $("body").html("Correct: " + right);
    })

// Updating user score on button click and creating new page with results.

}