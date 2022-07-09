let resultText = document.getElementById("result");
let flag = false;


function addToCalc(value) {
   
    if (flag) {
        resultText.value = '';
        flag = false;
    }
    resultText.value += value;

}

function finalResult() {
    let array = resultText.value.split('');
    let newArray = array.map((item) => {
        if (item === "^") {
            item = "**"
        }
        else {item = item}
        return item;
    })
    let txt = newArray.join('');

    let result = eval(txt);
    resultText.value = result;
    flag = true;
}

function clearDisplay(){
    resultText.value = '';
}
function abs(){
    let result = Math.abs(resultText.value);
    resultText.value = result;
    flag = true;
}
function ceil(){
    let result = Math.ceil(resultText.value);
    resultText.value = result;
    flag = true;
}
function sqrt(){
    let result = Math.sqrt(resultText.value);
    resultText.value = result;
    flag = true;
}
function floor(){
    let result = Math.floor(resultText.value);
    resultText.value = result;
    flag = true;
}
function round(){
    let result = Math.round(resultText.value);
    resultText.value = result;
    flag = true;
}
function power(value){
    if (flag) {
        resultText.value = '';
        flag = false;
    }
    resultText.value += value;
}
