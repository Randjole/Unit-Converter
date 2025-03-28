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

    if (inputUnitF === 'kilometers') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert * 1000;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = "It's the same ";
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 1609;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert * 3281;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert * 39370;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = lengthToConvert * 100000;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert * 1e+6;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 1093.6133;
        }

    }

    if (inputUnitF === 'miles') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert * 1609;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert * 16093;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = "It's the same ";
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert * 5280;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert * 39370;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = lengthToConvert * 160934;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert * 1609344;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 1760;
        }

    }
    if (inputUnitF === 'feet') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert / 3.281 ;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert / 3281;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 5280 ;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = "It's the same ";
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert * 12;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = lengthToConvert * 30.48;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert * 305;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 0.333333333;
        }

    }
    if (inputUnitF === 'inches') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert / 39.37;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert / 39370;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 63360 ;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert / 12;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = lengthToConvert * 2.54;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert* 25.4;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert *0.0277777778;
        }

    }
    if (inputUnitF === 'centimeters') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert / 100;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert / 100000;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 160934;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert / 30.48;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert / 2.54;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert* 10;
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 0.010936133;
        }

    }
    if (inputUnitF === 'millimeters') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert / 1000;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert /  1e+6;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert / 1.609e+6;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert / 305;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert / 25.4;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value =  lengthToConvert / 10 ;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = "It's the same";
        }
        if (inputUnitT === 'yards') {
            outputValue.value = lengthToConvert * 0.0010936133;
        }

    }
    if (inputUnitF === 'yards') {
        if (inputUnitT === 'meters') {
            outputValue.value = lengthToConvert * 0.9144;
        }
        if (inputUnitT === 'kilometers') {
            outputValue.value = lengthToConvert * 0.0009144;
        }
        if (inputUnitT === 'miles') {
            outputValue.value = lengthToConvert * 5.6818e-4;
        }
        if (inputUnitT === 'feet') {
            outputValue.value = lengthToConvert * 3;
        }
        if (inputUnitT === 'inches') {
            outputValue.value = lengthToConvert * 36;
        }
        if (inputUnitT === 'centimeters') {
            outputValue.value =  lengthToConvert * 91.44 ;
        }
        if (inputUnitT === 'millimeters') {
            outputValue.value = lengthToConvert * 914.4;
        }
        if (inputUnitT === 'yards') {
            outputValue.value =  "It's the same";
        }

    }
}