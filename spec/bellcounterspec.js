const bellCounter = require("../bellcounter");

describe("Bell Counter", function() {
  it("should return the appropriate amount of rings", function() {
    //     INPUT $startTime = '2:00'; $endTime = '3:00'; OUTPUT 5
    // 2. INPUT $startTime = '14:00'; $endTime = '15:00'; OUTPUT 5
    // 3. INPUT $startTime = '14:23'; $endTime = '15:42'; OUTPUT 3
    // 4. INPUT $startTime = '23:00'; $endTime = '1:00'; OUTPUT 24

    let totalNumberOfRings = bellCounter("2:00", "3:00");
    expect(totalNumberOfRings).toBe(5);
    totalNumberOfRings = bellCounter("14:00", "15:00");
    expect(totalNumberOfRings).toBe(5);
    totalNumberOfRings = bellCounter("14:23", "15:42");
    expect(totalNumberOfRings).toBe(3);
    totalNumberOfRings = bellCounter("23:00", "1:00");
    expect(totalNumberOfRings).toBe(24);
  });
});
