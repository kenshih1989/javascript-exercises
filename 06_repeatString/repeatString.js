const repeatString = function(repeatedWord,repeatTime) {
    let element='';

    if (repeatTime<0)
        return 'ERROR';

    for (let index = 0; index < repeatTime; index++) {
        element+= repeatedWord;
    }
    return element;

};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('goodbye', -1);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
