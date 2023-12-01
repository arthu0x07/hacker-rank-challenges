function timeConversion(s) {
  var time = s.slice(0, -2);
  var hour = parseInt(time.slice(0, 2));

  if (s.slice(-2) === "PM" && hour !== 12) {
    hour += 12;
  } else if (s.slice(-2) === "AM" && hour === 12) {
    hour = "00";
  } else if (s.slice(-2) === "AM" && hour < 10) {
    hour = "0" + hour;
  }
  var newTime = hour + time.slice(2);

  console.log(newTime);
  return newTime;
}
