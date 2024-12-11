//your JS code here. If required.
function daysOfAYear(year) {
	if((y % 400 == 0) ||
       (y % 100 != 0) && 
       (y % 4 == 0))
		return 366;
	else
		return 365;
}