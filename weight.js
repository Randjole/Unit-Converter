function converterU() {

    const lengthToConvert = parseFloat(document.getElementById('len').value); 
    const inputUnitF = document.getElementById('inputUnitFrom').value;
    const inputUnitT = document.getElementById('inputUnitTo').value;
    const outputValue = document.getElementById('outputValue');

    if (inputUnitF === 'milligram') {
        if (inputUnitT === 'milligram') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'gram') {
            outputValue.value = lengthToConvert / 1000;
        }
        if (inputUnitT === 'kilogram') {
            outputValue.value = lengthToConvert / 1000000;
        }
        if (inputUnitT === 'ounce') {
            outputValue.value = lengthToConvert * 3.5274E-5;
        }
        if (inputUnitT === 'pound') {
            outputValue.value = lengthToConvert * 0.0000022046;
        }

    }
    if (inputUnitF === 'gram') {
        if (inputUnitT === 'milligram') {
            outputValue.value = lengthToConvert * 1000;
        }
        if (inputUnitT === 'gram') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'kilogram') {
            outputValue.value = lengthToConvert / 1000;
        }
        if (inputUnitT === 'ounce') {
            outputValue.value = lengthToConvert / 28.34952;
        }
        if (inputUnitT === 'pound') {
            outputValue.value = lengthToConvert / 453.59237;
        }

    }

    if (inputUnitF === 'kilogram') {
        if (inputUnitT === 'milligram') {
            outputValue.value = lengthToConvert * 1000000;
        }
        if (inputUnitT === 'gram') {
            outputValue.value = lengthToConvert * 1000 ;
        }
        if (inputUnitT === 'kilogram') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'ounce') {
            outputValue.value = lengthToConvert / 0.02834952;
        }
        if (inputUnitT === 'pound') {
            outputValue.value = lengthToConvert / 0.45359237;
        }

    }
    if (inputUnitF === 'ounce') {
        if (inputUnitT === 'milligram') {
            outputValue.value = lengthToConvert * 28.3495231;
        }
        if (inputUnitT === 'gram') {
            outputValue.value = lengthToConvert * 28.34952 ;
        }
        if (inputUnitT === 'kilogram') {
            outputValue.value = lengthToConvert * 0.02834952;
        }
        if (inputUnitT === 'ounce') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'pound') {
            outputValue.value = lengthToConvert /16;
        }

    }
    if (inputUnitF === 'pound') {
        if (inputUnitT === 'milligram') {
            outputValue.value = lengthToConvert * 453.592;
        }
        if (inputUnitT === 'gram') {
            outputValue.value = lengthToConvert * 453.59237 ;
        }
        if (inputUnitT === 'kilogram') {
            outputValue.value = lengthToConvert * 0.45359237;
        }
        if (inputUnitT === 'ounce') {
            outputValue.value = lengthToConvert * 16;
        }
        if (inputUnitT === 'pound') {
            outputValue.value = "It's the same";
        }

    }


}
