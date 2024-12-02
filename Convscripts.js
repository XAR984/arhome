// Length Conversion
function convertLength() {
    var input = document.getElementById('lengthInput').value;
    var from = document.getElementById('lengthFrom').value;
    var to = document.getElementById('lengthTo').value;
    var result;

    // Conversion logic for length
    if (from === 'cm' && to === 'm') {
        result = input / 100;
    } else if (from === 'cm' && to === 'km') {
        result = input / 100000;
    } else if (from === 'm' && to === 'cm') {
        result = input * 100;
    } else if (from === 'm' && to === 'km') {
        result = input / 1000;
    } else if (from === 'km' && to === 'cm') {
        result = input * 100000;
    } else if (from === 'km' && to === 'm') {
        result = input * 1000;
    } else if (from === 'inch' && to === 'cm') {
        result = input * 2.54;
    } else if (from === 'inch' && to === 'm') {
        result = input * 0.0254;
    } else if (from === 'inch' && to === 'km') {
        result = input * 0.0000254;
    } else if (from === 'ft' && to === 'cm') {
        result = input * 30.48;
    } else if (from === 'ft' && to === 'm') {
        result = input * 0.3048;
    } else if (from === 'ft' && to === 'km') {
        result = input * 0.0003048;
    } else if (from === 'yd' && to === 'cm') {
        result = input * 91.44;
    } else if (from === 'yd' && to === 'm') {
        result = input * 0.9144;
    } else if (from === 'yd' && to === 'km') {
        result = input * 0.0009144;
    } else {
        result = input;
    }

    document.getElementById('lengthResult').innerText = 'نتیجه: ' + result;
}

// Weight Conversion
function convertWeight() {
    var input = document.getElementById('weightInput').value;
    var from = document.getElementById('weightFrom').value;
    var to = document.getElementById('weightTo').value;
    var result;

    // Conversion logic for weight
    if (from === 'g' && to === 'kg') {
        result = input / 1000;
    } else if (from === 'g' && to === 'lb') {
        result = input * 0.00220462;
    } else if (from === 'g' && to === 'oz') {
        result = input * 0.035274;
    } else if (from === 'kg' && to === 'g') {
        result = input * 1000;
    } else if (from === 'kg' && to === 'lb') {
        result = input * 2.20462;
    } else if (from === 'kg' && to === 'oz') {
        result = input * 35.274;
    } else if (from === 'lb' && to === 'g') {
        result = input * 453.592;
    } else if (from === 'lb' && to === 'kg') {
        result = input * 0.453592;
    } else if (from === 'lb' && to === 'oz') {
        result = input * 16;
    } else if (from === 'oz' && to === 'g') {
        result = input * 28.3495;
    } else if (from === 'oz' && to === 'kg') {
        result = input * 0.0283495;
    } else if (from === 'oz' && to === 'lb') {
        result = input * 0.0625;
    } else {
        result = input;
    }

    document.getElementById('weightResult').innerText = 'نتیجه: ' + result;
}

// Temperature Conversion
function convertTemperature() {
    var input = document.getElementById('tempInput').value;
    var from = document.getElementById('tempFrom').value;
    var to = document.getElementById('tempTo').value;
    var result;

    // Conversion logic for temperature
    if (from === 'celsius' && to === 'fahrenheit') {
        result = (input * 9/5) + 32;
    } else if (from === 'celsius' && to === 'kelvin') {
        result = parseFloat(input) + 273.15;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (input - 32) * 5/9;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
        result = ((input - 32) * 5/9) + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
        result = input - 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
        result = ((input - 273.15) * 9/5) + 32;
    } else {
        result = input;
    }

    document.getElementById('tempResult').innerText = 'نتیجه: ' + result;
}

// Volume Conversion
function convertVolume() {
    var input = document.getElementById('volumeInput').value;
    var from = document.getElementById('volumeFrom').value;
    var to = document.getElementById('volumeTo').value;
    var result;

    // Conversion logic for volume
    if (from === 'ml' && to === 'l') {
        result = input / 1000;
    } else if (from === 'ml' && to === 'cubicm') {
        result = input / 1000000;
    } else if (from === 'ml' && to === 'cubiccm') {
        result = input;
    } else if (from === 'l' && to === 'ml') {
        result = input * 1000;
    } else if (from === 'l' && to === 'cubicm') {
        result = input / 1000;
    } else if (from === 'l' && to === 'cubiccm') {
        result = input * 1000;
    } else if (from === 'cubicm' && to === 'ml') {
        result = input * 1000000;
    } else if (from === 'cubicm' && to === 'l') {
        result = input * 1000;
    } else if (from === 'cubicm' && to === 'cubiccm') {
        result = input * 1000000;
    } else if (from === 'cubiccm' && to === 'ml') {
        result = input;
    } else if (from === 'cubiccm' && to === 'l') {
        result = input / 1000;
    } else if (from === 'cubiccm' && to === 'cubicm') {
        result = input / 1000000;
    } else {
        result = input;
    }

    document.getElementById('volumeResult').innerText = 'نتیجه: ' + result;
}
