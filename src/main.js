import './main.css';
console.log('Mini JavaScript Calculator');

var actual_value = 0; // Value received from the numpad.
var action_value = ""; // Value like +, - , /, *
var number_value = 0; // The value on the screen.
var memory_value = ""; // The value on calculator memory.
var point_value = false; // The value of point of number.

function clear_all(){
    action_value = 0;
    memory_value ="";
    point_value = false;
}

function add_digit(actual_value){
    let new_string;
    if (actual_value == 'C'){
        clear_all();
        new_string = 0;
    } else if(number_value == 0 && number_value.toString().length == 1){
        if(actual_value == '00'){
            new_string = number_value;
        } else {
        new_string = actual_value.toString();
        }
    } else {
        new_string = number_value.toString() + actual_value.toString();
    }
    return new_string
};

function add_point(){
    let new_string;
    if (point_value == false){
        new_string = number_value.toString() + actual_value.toString();
        point_value = true;
    } else {
        new_string = number_value;
    }
    return new_string
};

function add_arithmetic(actual_value){
    if (memory_value.toString().length == 0){
        memory_value = number_value;
        action_value = actual_value;
        number_value = 0;
        console.log(action_value);
    }
    return number_value;
};

function answer(){
    let new_string;
    /*if (memory_value.toString().length == 0){
    }*/
    if(action_value == "+"){
        new_string = parseFloat(memory_value) + parseFloat(number_value);
        console.log('Hey hop');
    }
    if(action_value == "-"){
        new_string = parseFloat(memory_value) - parseFloat(number_value);
        console.log('Hey hop');
    }
    if(action_value == "*"){
        new_string = parseFloat(memory_value) * parseFloat(number_value);
        console.log('Hey hop');
    }
    if(action_value == "/"){
        new_string = parseFloat(memory_value) / parseFloat(number_value);
        console.log('Hey hop');
    }

    return new_string;
};


$(document).ready(function() {
    $('.numbers').click(function(){
        actual_value = $(this).attr('value');
        number_value = add_digit(actual_value);
        $('#calcDisplay').text(number_value);
    });
    $('.point').click(function(){
        actual_value = $(this).attr('value'); // to do Убрать если не нужна 
        number_value = add_point();
        $('#calcDisplay').text(number_value);
    });
    $('.arithmetic').click(function(){
        actual_value = $(this).attr('value');
        number_value = add_arithmetic(actual_value);
        $('#calcDisplay').text(number_value);
    });
    $('.answer').click(function(){
        number_value = answer();
        $('#calcDisplay').text(number_value);
    });
});