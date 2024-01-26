const  display = document.getElementById("display")

let calString = ""
function appendToDisplay(input){
    if (display.value == "Error"){
        display.value =""
        calString =""
    }
    display.value += input;
    calString += input
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function backSpace(){
    let last = display.value.length;
    display.value = display.value.slice(0,last-1);
}

function appendPercentToDisplay(){
    let num = 0;
    const reLastNumeric = /(\d+(\.\d*)?)$/;  //match \d = digits or \d+\.\d = decimal; ? with $ means the shortest answer starting from the end of the string

    //using match function to get the number in string format
    const numstr = display.value.match(reLastNumeric);

    if (numstr){
        //change string into float times 100%
        num = parseFloat(numstr)*0.01;
        //change num back to string and replace the RE matched slice
        display.value = display.value.replace(reLastNumeric, String(num));
    }else{
        display.value = 'Error';
    }
}

