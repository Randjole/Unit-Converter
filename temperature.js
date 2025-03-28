function converterU() {

    const lengthToConvert = parseFloat(document.getElementById('len').value); 
    const inputUnitF = document.getElementById('inputUnitFrom').value;
    const inputUnitT = document.getElementById('inputUnitTo').value;
    const outputValue = document.getElementById('outputValue');

    if (inputUnitF === 'celsius') {
        if (inputUnitT === 'celsius') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'fahrenheit') {
            outputValue.value = lengthToConvert * 33.8;
        }
        if (inputUnitT === 'kelvin') {
            outputValue.value = lengthToConvert * 274.15;
        }
    }
    if (inputUnitF === 'fahrenheit') {
        if (inputUnitT === 'celsius') {
            outputValue.value = (lengthToConvert - 32) * 5/9 ;
        }
        if (inputUnitT === 'fahrenheit') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'kelvin') {
            outputValue.value = (lengthToConvert + 459.67) * 5/9;
        }
    }
    if (inputUnitF === 'kelvin') {
        if (inputUnitT === 'celsius') {
            outputValue.value = lengthToConvert * (-273.15) ;
        }
        if (inputUnitT === 'fahrenheit') {
            outputValue.value = lengthToConvert * 9/5 - 459.67;
        }
        if (inputUnitT === 'kelvin') {
            outputValue.value = "It's the same";
        }
    }
    
    
}