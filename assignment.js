// --------------------------Problem 1--------------kilometerToMeter Start-------------------------------------

function kilometerToMeter(distance){
    if(distance >= 0){                      // distance cannot be negetive
        convertDistance = distance * 1000;
        return convertDistance;
    }
    else{
        return 'Your Input Is Invalid!!'   // this statement will be executed if input parameter is negetive
    }
}

let distanceInMeter = kilometerToMeter(5.5); // passing parameter for kilometerToMeter() function
console.log(distanceInMeter);   // printing result of kilometerToMeter() function

// --------------------------Problem 1--------------kilometerToMeter End----------------------------------------



//-----------------------Problem 2-----------------budgetCalculator Start---------------------------------------

function budgetCalculator(watchNo, phoneNo, laptopNo){
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;
    if(watchNo < 0 || phoneNo < 0 || laptopNo < 0){ // this condition is checking  given argument is negative or not
        return "Number of Watch, Phone or Laptop Cannot be Negative!!"
    }
    else if(Number.isInteger(watchNo) == false || Number.isInteger(phoneNo) == false || Number.isInteger(laptopNo) == false){
        return "Number of Watch, Phone or Laptop Cannot be Fraction!!" // this statement will be executed if given parameter or parameters is decimal value
    }
    else{
        totalPrice = (watchNo * watchPrice) + (phoneNo * phonePrice) + (laptopNo * laptopPrice);
    }
    return totalPrice;
}

let budget = budgetCalculator(17, 19, 5); // passing parameter to budgetCalculator()  
console.log(budget); // printing total price of the watch, phone, laptop

//-----------------------Problem 2-----------------budgetCalculator End---------------------------------------



//-----------------------Problem 3-----------------hotelCost Start--------------------------------------------

function hotelCost(day){
    var totalCost;
    if(day < 0 || Number.isInteger(day) == false){ 
        // this condition is checking if given parameter is  negative or not and integer or not
        return "Number of Day Is Not Valid!!"
    }
    else if(day >= 0 && day <= 10){
        totalCost = 100 * day; 
    }
    else if(day >= 11 &&  day <= 20){
        var firstCost = 10 * 100;
        var remainDay = day - 10;
        totalCost = firstCost + (remainDay * 80);
    }
    else{
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remainDay = day - 20;
        totalCost = firstCost + secondCost + (remainDay * 50);
    }
    return totalCost;
}

let dayCost = hotelCost(0);
console.log(dayCost);

//-----------------------Problem 3-----------------hotelCost End--------------------------------------------



//-----------------------Problem 4-------------------megaFriend Start-----------------------------------------

function megaFriend(name){
    if(name.length == 0){        // here checking given string array is empty or not
        console.log("You Didn't Give  Any Name!!")
    }
    let longestName = ''; // declared an empty string for comparing
    for(let i = 0; i < name.length; i++){
        let currentName = name[i];
        if(currentName.length > longestName.length){
            longestName = currentName;
        }
    }
    return longestName; // returning the longest string from the array
}

let friendName = ['samiha', 'jarin', 'vondul', 'era', 'pupupupapa', 'sneha', 'tasnim'];
let resultName = megaFriend(friendName); // passing string array as parameter
console.log(resultName); 

//-----------------------Problem 4-------------------megaFriend End-----------------------------------------