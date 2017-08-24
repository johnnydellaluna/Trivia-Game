window.onload = function() {
	var time = 60;
    $("#displaytime").text("Time remaining: " + time);
        var count = setTimeout(function(){
            time--;
            $("#displaytime").text("Time remaining: " + time)
		}, 1000);
    
}

// Program correct and incorrect answer lists.
// Mark correct answers as such and write to results screen. Same for incorrect answers.