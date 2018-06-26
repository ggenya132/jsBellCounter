function bellCounter(startingTime, endingTime) {
  const getNumberOfRingsFromMillitaryTime = millitaryTime => {
    if (millitaryTime === 0) {
      return 12;
    } else {
      return millitaryTime > 12 ? millitaryTime - 12 : millitaryTime;
    }
  };
  let totalBellRings = 0;
  const startingInput = {
    hours: startingTime.split(":")[0],
    minutes: startingTime.split(":")[1]
  };
  const endingInput = {
    hours: endingTime.split(":")[0],
    minutes: endingTime.split(":")[1]
  };

  const startDate = new Date();
  const endDate = new Date();

  startDate.setMinutes(startingInput.minutes);
  startDate.setHours(startingInput.hours);
  endDate.setMinutes(endingInput.minutes);
  endDate.setHours(endingInput.hours);

  //adjusting for ending input being on the next day

  if (endingInput.hours < startingInput.hours) {
    endDate.setDate(endDate.getDate() + 1);
  }

  //offsetting rings if bell has already rung
  if (startingInput.minutes > 0) {
    totalBellRings = -getNumberOfRingsFromMillitaryTime(startDate.getHours());
  }

  while (startDate <= endDate) {
    totalBellRings += getNumberOfRingsFromMillitaryTime(startDate.getHours());
    startDate.setHours(startDate.getHours() + 1);
  }
  return totalBellRings;
}

module.exports = bellCounter;
