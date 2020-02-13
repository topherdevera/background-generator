function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You saw a river";
			break;
		case "left":
			whatHappens = "You climb a tree";
			break;		
		case "forward":
			whatHappens = "You eat good food";
			break;
		default:
			whatHappens = "please enter a valid direction"	
	}
		return whatHappens;
}