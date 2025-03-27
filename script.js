function converterU() {

    const lengthToConvert = parseFloat(document.getElementById('len').value); // Corrected id here
    const inputUnitF = document.getElementById('inputUnitFrom').value;
    const inputUnitT = document.getElementById('inputUnitTo').value;
    const outputValue = document.getElementById('outputValue');


    if (inputUnitF === 'meters') {
        if (inputUnitT === 'meters') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert / 1000;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 1609;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert * 3281;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert * 39.37;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = lengthToConvert * 100;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert * 1000;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 1.0936132983;
        }

    }
}
//     // else if (inputUnitF === 'kilometers') {
//     //     if (inputUnitT === 'meters') {
//     //         outputValue.value = lengthToConvert * 1000;
//     //     }
//     //     if (inputUnitT === 'kilometers') {
//     //         outputValue.value = "It's the same ";
//     //     }
//     //     if (inputUnitT === 'miles') {
//     //         outputValue.value = lengthToConvert / 1609;
//     //     }
//     //     if (inputUnitT === 'feet') {
//     //         outputValue.value = lengthToConvert * 3281;
//     //     }
//     //     if (inputUnitT === 'inches') {
//     //         outputValue.value = lengthToConvert * 39.37;
//     //     }
//     //     if (inputUnitT === 'centimeters') {
//     //         outputValue.value = lengthToConvert * 100;
//     //     }
//     //     if (inputUnitT === 'millimeters') {
//     //         outputValue.value = lengthToConvert * 1000;
//     //     }
//     //     if (inputUnitT === 'yards') {
//     //         outputValue.value = lengthToConvert * 1.0936132983;
//     //     }

//     // }
// }