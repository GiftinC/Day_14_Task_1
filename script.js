var displayScreen = document.getElementById("display-screen");

function display(num){
    displayScreen.value += num;
}

function Clear(){
    displayScreen.value = "";
}

function del(){
    displayScreen.value = displayScreen.value.slice(0,-1);
}

function calculate(){
   try {
    displayScreen.value = eval(displayScreen.value);
    }
    catch (err){
alert ("Only numbers are allowed");
    }
}