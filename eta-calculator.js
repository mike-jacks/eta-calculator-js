var distanceToDestingation = prompt("What is the distance to your destination?");
var speed = prompt("What is your current speed?");
var ETA = Number(distanceToDestingation) / Number(speed);
ETA =
  ETA < 1
    ? ETA * 60 == 1
      ? (ETA * 60).toFixed(2) + " minute"
      : (ETA * 60).toFixed(2) + " minutes"
    : ETA.toFixed(2) + (ETA == 1 ? " hour" : " hours");
alert("Your ETA is " + ETA);
document.getElementById("distance").textContent = "Your distance to your location is : " + distanceToDestingation + " miles.";
document.getElementById("speed").textContent = "Your current speed is: " + speed + "mph.";
document.getElementById("eta").textContent = "Your eta to your destination is: " + ETA;
