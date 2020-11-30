const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function(totalBatteries, batch){
    console.log(totalBatteries, batch)
    return totalBatteries + batch
}, 0)