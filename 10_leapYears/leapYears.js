const leapYears = function(year) {

    if (year%100 === 0 ){
        let result = year/100;
        if(result%4 === 0)
            return true;
        else
            return false;
    }
        
    if (year%4 === 0)
        return true;

    return false;
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
