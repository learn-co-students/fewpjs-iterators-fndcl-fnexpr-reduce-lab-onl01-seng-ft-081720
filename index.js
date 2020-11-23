const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = batteryBatches.reduce(reducer)

// Code your solution here
