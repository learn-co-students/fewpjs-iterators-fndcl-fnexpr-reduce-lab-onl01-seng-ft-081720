const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function batteries(arr){ 
//     const totalBatteries = arr.reduce(function(x, total){
//         return x += y
//     })
//     return totalBatteries
// }

const totalBatteries = batteryBatches.reduce(function(x, y){
    return x += y
})
console.log(totalBatteries)