const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = 0;
function getTotalBatteries(total, batch){
    return total + batch;
}
totalBatteries = batteryBatches.reduce(getTotalBatteries, 0);