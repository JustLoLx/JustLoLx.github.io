function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins === 1 ||robot.info().coins ===3 ||robot.info().coins ===5 ||robot.info().coins ===7) {
		robot.action.amount = -40;
	}
	console.log(robot.info().coins);
}
