import './main.css';
console.log('Mini JavaScript Calculator');
// The main program code

// Global variables
var actual_value = 0; // Value received from the numpad.
var action_value = ""; // Value like +, - , /, *
var number_value = 0; // The value on the screen.
var memory_value = ""; // The value on calculator memory.
var point_value = false; // The value of point of number.

function clear_all(){
    // Reset calculator / global variables 
    action_value = 0;
    memory_value ="";
    point_value = false;
}


function add_digit(actual_value){
    // Add digit on calculator display
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
    // Add point to number on calculator display
    // TO DO -> replace to add_digit()
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
    // Function to enter arichmetic value
    if (memory_value.toString().length == 0){
        memory_value = number_value;
        action_value = actual_value;
        number_value = 0;
        point_value = false;
    }
    return number_value;
};


function answer_clear(){
    // Reset calculator after answer/ global variables
    // TO DO with point_value after answer
    action_value = 0;
    memory_value ="";
    point_value = false;
}

  
var math_answer = {
    // Return answer to programm
    '+': function(a, b)
        {return parseFloat(a) + parseFloat(b); },
    '-': function(a, b)
        {return parseFloat(a) - parseFloat(b); },
    '*': function(a, b)
        {return parseFloat(a) * parseFloat(b); },
    '/': function(a, b)
        {return parseFloat(a) / parseFloat(b); }
}


function check_point(number_value){
    // Check point simbol in answer. 
    let point_index = number_value.toString();
    point_index = point_index.indexOf(".");
    if (point_index >= 0){
        point_value = true;
    } else {
        point_value = false;
    }
}


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
    $('.answer').click(function() {
        // Check code
        console.log('memory value: ' + memory_value);
        console.log('action value: ' + action_value);
        console.log('number value: ' + number_value);
        let value = math_answer[action_value](memory_value, number_value);
        number_value = value;
        answer_clear();
        console.log(number_value);
        check_point(number_value);
        console.log(number_value);
        $('#calcDisplay').text(number_value);
    });
});