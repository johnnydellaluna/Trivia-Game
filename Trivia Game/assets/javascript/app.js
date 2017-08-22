window.onload = function() {
	$("#displaytime").text("Time remaining: 50");
		var time = 50;
		var count = setInterval(function(){
			time--;
			$("#display").text("Time remaining: " + time, 50000);

	})

}