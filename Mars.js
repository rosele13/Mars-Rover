// Rover Object Goes Here
// ======================
const roverObjct = { 
  direction: "N",
  x:0,
  y:0,
 travelLog: [{x:0,y:0, dir: "N"}]
}

// ======================
function turnLeft(rover) // Rotate the rover left
{
  console.log("turnLeft was called!");
  switch(rover.direction)
    {
      case "N":
        rover.direction = "W"
        break;
      case "W":
        rover.direction = "S"
        break;
      case "S":
        rover.direction = "E"
        break;
      case "E":
        rover.direction = "N"
        break;
      default:
        console.log(`${rover.direction} is not a valid direction`);
        break;
    }

}

function turnRight(rover) //Rotate the rover right
{
  console.log("turnRight was called!");
  switch(rover.direction)
    {
      case "N":
        rover.direction = "E"
        break;
      case "E":
        rover.direction = "S"
        break;
      case "S":
        rover.direction = "W"
        break;
      case "W":
        rover.direction = "N"
        break;
      default:
        console.log(`${rover.direction} is not a valid direction`);
        break;
    }
  console.log(rover.direction);
}

function moveForward(rover) //Move rover forward
{
  console.log("moveForward was called")
    //Test for direction
    switch ( rover.direction)
    {
    case "N":
        if (rover.y > 0) //Test for Boundary
          { 
            rover.y--;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "W":
        if (rover.x > 0) //Test for Boundary
          { 
            rover.x--;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "S":
      if (rover.y < 9) //Test for Boundary
          { 
            rover.y++;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "E":
      if (rover.x <9) //Test for Boundary
          { 
            rover.x++;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    default:
      console.log (`${rover.direction} is not a valid direction`);
      break;
    }
  
}

function moveBackward(rover) //Move rover backward
{
  console.log("moveBackward was called")
    //Test for direction
    switch ( rover.direction)
    {
    case "N":
        if (rover.y < 9) //Test for Boundary
          { 
            rover.y++;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "W":
        if (rover.x < 9) //Test for Boundary
          { 
            rover.x++;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "S":
      if (rover.y > 0) //Test for Boundary
          { 
            rover.y--;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    case "E":
      if (rover.x > 0) //Test for Boundary
          { 
            rover.x--;
            console.log(`Rover has position: x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {x: rover.x, y: rover.y, dir: rover.direction};
            rover.travelLog.push(newPosition);
          }
        else 
          {
            console.log ("You can't place Rover outside of the grid!");
          }
      break;
    default:
      console.log (`${rover.direction} is not a valid direction`);
      break;
    }
  
}

function command(moves) 
{
  for (let i = 0; i < moves.length; i++){
    let move = moves[i];
    switch(move){
      case "f": // forward
        moveForward(roverObjct);
        break;
      case "r": // right
        turnRight(roverObjct);
        break;  
      case "l": // left
        turnLeft(roverObjct);
        break; 
      case "b": // back
        moveBackward(roverObjct);
        break;
      default:
        break;
    }
  }
  console.log(roverObjct.travelLog);
}
command("rfflblfrff");
