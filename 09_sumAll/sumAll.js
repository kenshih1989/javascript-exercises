const sumAll = function(input1,input2) {

    //Condition checking
    //1. inputs should not negative
    if (input1 <0 || input2<0)
        return 'ERROR';

    //2. inputs should be integer
    if (!Number.isInteger(input1) || !Number.isInteger(input2))
        return 'ERROR';

    //if (typeof input1 !== "number" || typeof input2 !=="number")
    //    return 'ERROR';
    
    //swap in accending order
    if (input1 > input2){
        let temp = input2;
        input2= input1;
        input1=temp;
    }

    let total = 0;
    for (; input1 <= input2; input1++) {
        total += input1;
    }

    return total;
};

sumAll(2, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

