//var:1 [Working]
function init(robot) {
  robot.onTheTime = 0;
}

function loop(robot) {
	if(robot.onTheTime > 5){
		robot.action = {type: "jump", amount: 10};
	}
    if(robot.info().coins === 1){robot.onTheTime++;}
	console.log(robot.onTheTime)
	
}
//var:2 [Need to wait 4sec]
function loop(robot) {
	
	robot.action = {type: 'move',amount: 40};
    if (robot.info().x % 50 && robot.info().x > 105) { 
        robot.action = {type: 'jump',amount: 10};
    }
}