//var:1
function loop(robot)
{
  robot.action = {
    type: 'move',
    amount: 40
  };
  if (robot.info().coins > robot.oldCoins)
  {
    robot.action = {
      type: 'jump',
      amount: 10
    };
  }

  if (robot.info().energy > robot.oldEnergy)
  {
    robot.action = {
      type: 'jump',
      amount: 10
    };
  }
  robot.oldCoins = robot.info().coins;
  robot.oldEnergy = robot.info().energy;
  console.log("Coins: " + robot.oldCoins);
  console.log("Energy: " + robot.info().energy);
}

//var:2
function loop(robot) {
	robot.action = {type: 'move',amount: 40};
    if (Math.abs(250 - robot.info().x) < 45) {
        robot.action = {type: 'jump',amount: 10};
    } 
}