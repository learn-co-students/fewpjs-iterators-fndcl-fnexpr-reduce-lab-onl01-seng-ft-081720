const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator,currentVal) => accumulator + currentVal;
const totalBatteries = batteryBatches.reduce(reducer)