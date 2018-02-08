 //Board size
 var maxX = 3
 var maxY = 3
 
 //user starts at x0, y0 (bottom left of board)
 var userX = 0
 var userY = 0
 
 //Hide the treasure, also with x y values
 var treasureX = Math.floor(Math.random() * 4);
 var treasureY = Math.floor(Math.random() * 4);

 //Add traps to the game play area that can "kill" the contestant, forcing them to start over
 var trapX = Math.floor(Math.random() * 4);
 var trapY = Math.floor(Math.random() * 4);

 //Flag that controls loop
 var treasureFound = false
 
 //Get user's name
 var name = prompt("Welcome brave adventurer! Pick your player name.")
 while (treasureFound == false) {
   direction = prompt("Hey" + " " + name + "," + " " + "which direction would you like to go in (N=north, S=south, E=east, W=west)?")
   
   // tmp vars, only used for checking validity of new user location after move
   var newX;
   var newY;
   
   // When new direction entered:
   // see what new user location would be
   // check if new user location is valid
   // check if new user location is treasure
   
   if (direction == "N") {
     newX = userX
     newY = userY + 1
     // neither value < 0, neither is > max
     if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
       userX = newX
       userY = newY
     } else {
       alert("There is a forbidding mountain range in that direction, you cannot go")
     }
     
   } else if (direction == "E") {
     newX = userX + 1
     newY = userY
     // neither value < 0, neither is > max
     if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
       userX = newX
       userY = newY
     } else {
       alert("There is a forbidding mountain range in that direction, you cannot go")
     }
     
   } else if (direction == "S") {
     newX = userX
     newY = userY - 1
     // neither value < 0, neither is > max
     if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
       userX = newX
       userY = newY
     } else {
       alert("There is a forbidding mountain range in that direction, you cannot go")
     }
     
   } else if (direction == "W") {
     newX = userX - 1
     newY = userY
     // neither value < 0, neither is > max
     if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
       userX = newX
       userY = newY
     } else {
       console.log("There is a forbidding mountain range in that direction, you cannot go")
     }
   } else {
     alert("please enter a real direction")
   }
   
   if (userX == trapX && userY == trapY) {
     alert(" TRAP! Come back to start point.")
     userX = 0
     userY = 0
   }
   
   console.log("The user's x is: " + userX)
   console.log("The user's y is: " + userY)
   
   // see if user location matches treasure
   if (userX == treasureX && userY == treasureY) {
     alert("Hooray! You found the treasure!")
     treasureFound = true
   }
 }