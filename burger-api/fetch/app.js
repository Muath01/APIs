

const d = new Date();
const times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,12]
console.log(d.getHours())
timeToSleep(16,times)

function timeToSleep(num, arr){
    for (let i = num; i < 16; i++) {
        if(i = arr.length){
            i = 0;
        }else{
        console.log(arr[i])
        }
    }
}