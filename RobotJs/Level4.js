function loop(robot) {
	if (Math.abs(450 - robot.info().x) < 50) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}