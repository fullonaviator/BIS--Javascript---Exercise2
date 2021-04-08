
/*Function called when play button pushed. 
Specifies high and low limits of lottery, picks your number, 
starts the counter, and displays lucky number */

function gamble() {
    let min = 0;                             //Lowest posible number the generator can produce
    let max = 100000;                        //Highest posible number the generator can produce
    luckyNum = pickNum(min, max);            
    showCounting('.output .value', min, luckyNum, 1);               //starts the counter 
    document.querySelector('.output .value').innerHTML = luckyNum;  //displays lucky number on the page
}

/* Picks a random number */

function pickNum(min, max){
    myNumber = Math.floor(Math.random() * (max - min + 1) + min);  //Max and min both inclusive
    return myNumber;
}

/* Recieves your random number and prints result */

function printAlert(number) {
    if (number > 0 && number <= 1000) {
        alert("Congratulations! You've just won the JS lottery!");
    }else{
        alert("Too bad! You've Lost");
    }
}
   

/* Counter Function */ 

//Receives where to put the counter, where to start counting, where to end, and how fast to count
//Counter starts at lowest and counts up to the previously choosen random number
function showCounting (selector, start, end, duration){
    let obj = document.querySelector(selector);
    let current = start;
    let counter = setInterval( 
            function() {
                obj.innerHTML = current;
                if (current < end) { current +=100;                   //Marks when counter is over luckyNum
                 } else if (current > end) {current -=1               //Counts back to luckyNum
                    }else { clearInterval(counter); printAlert(end)}  //prints luckyNum when the counter is finished

            }, duration);
    }
    


