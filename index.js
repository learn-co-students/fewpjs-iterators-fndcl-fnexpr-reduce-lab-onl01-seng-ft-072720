const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let total = 0
function totalBatteries(arr, reducer, init) {
    let accum = init;
    arr.forEach(element => {
        accum = reducer(accum, element);
    });
    return accum;
}