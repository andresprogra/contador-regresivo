function getTime() {
	now = new Date();
	y2k = new Date("Sep 16 2015 13:38:20");
	days = (y2k - now) / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);
	hours = (y2k - now) / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = Math.floor(hours);
	minutes = (y2k - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = Math.floor(minutes);
	seconds = (y2k - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
	secondsRound = Math.round(seconds);
	if (daysRound <= "-1") {
		$("#quedan").remove();
		$("#pre").remove();
		$("#Flash").remove();
		$("#counter").css("font-size","38px");
		if($(window).width() < 992){
			$("#counter").css("font-size","23px");
		}
	}
	else{
		document.getElementById('dias').innerHTML = daysRound;
		document.getElementById('horas').innerHTML = hoursRound;
		document.getElementById('min').innerHTML = minutesRound;
		document.getElementById('seg').innerHTML = secondsRound;
	}
	newtime = window.setTimeout("getTime();", 1000);
}

