//Var:1
function loop(robot) {
    if (Math.abs(410 - robot.info().x) < 50) {
        robot.action = {
            type: 'jump',
            amount: 10
        };
    } else {
        robot.action = {
            type: 'move',
            amount: 40
        };
        if (Math.abs(580 - robot.info().x) < 30) {
            robot.action = {
                type: 'jump',
                amount: 10
            };
        } else {
            robot.action = {
                type: 'move',
                amount: 40
            };
        }
    }
}


//Var:2
function loop(robot) {
	
    if (Math.abs(410 - robot.info().x) < 50) {
        robot.action = {type: 'jump',amount: 10};
    } else
    if (Math.abs(580 - robot.info().x) < 30) 
	{robot.action = {type: 'jump',amount: 10};
	} else 
		robot.action = {type: 'move',amount: 40};
}


//Var:3
function loop(robot) {
	robot.action = {type: 'move',amount: 40};
    if (Math.abs(410 - robot.info().x) < 50) {
        robot.action = {type: 'jump',amount: 10};
    } 
    if (Math.abs(580 - robot.info().x) < 30) 
	{robot.action = {type: 'jump',amount: 10};
	}     
}
