const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function sumOfBatteries(batteryBatches) {
//     let totalBatteries = 0;

//     batteryBatches.forEach(function(batteryBatches) {
//         totalBatteries += batteryBatches;
//     });

//     return totalBatteries;
// }

// console.log(sumOfBatteries(batteryBatches));


const totalBatteries = batteryBatches.reduce(function(total, element)
{return element + total})


// Create a new variable called totalBatteries which is the sum of all 
// of the battery amounts in the batteryBatches array. Naturally, use reduce() 
// for this!