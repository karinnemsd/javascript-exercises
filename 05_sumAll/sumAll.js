const sumAll = function(num1, num2) {
    let summed = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            summed += i;
        } return summed;
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++){
            summed += i;
        } return summed;
    } 
    }

// Do not edit below this line
module.exports = sumAll;
