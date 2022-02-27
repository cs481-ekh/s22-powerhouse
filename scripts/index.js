/*jslint node: true*/
function sum(a, b) {
    return a + b;
}
// module.exports = sum;

//Converts give celcius temperature to Kelvin
function converToKelvin(celcius) {
    let ret = celcius + 273.15;
    return ret;
}

//Imports values from html form and uses them to calculate Goldman-Hodgkin-Katz solution
function myFunc() {

    //Constants for the equation
    let r = 8.3145;
    let f = 96485.3415;

    //Assigns values for variables from html form
    let potasPerm = parseInt(document.getElementById("permeabilityTextbox1").value);
    let potassium1 = parseInt(document.getElementById("concentrationTextbox1").value);
    let potassium2 = parseInt(document.getElementById("concentrationTextbox2").value);
    let sodiumPerm = parseInt(document.getElementById("permeabilityTextbox2").value);
    let sodium1 = parseInt(document.getElementById("concentrationTextbox3").value);
    let sodium2 = parseInt(document.getElementById("concentrationTextbox4").value);
    let chloridePerm = parseInt(document.getElementById("permeabilityTextbox3").value);
    let chloride1 = parseInt(document.getElementById("concentrationTextbox5").value);
    let chloride2 = parseInt(document.getElementById("concentrationTextbox6").value);
    let temp = parseInt(document.getElementById("temperature").value);
    let kelvinTemp = converToKelvin(temp);

    //Calculates value using our Goldman equation
    let numerator = ((potasPerm * potassium2) + (sodiumPerm * sodium2) + (chloridePerm * chloride1));
    let denominator = ((potasPerm * potassium1) + (sodiumPerm * sodium1) + (chloridePerm * chloride2))
    let firstPart = (-(r*kelvinTemp) / f);
    let secondPart = Math.log(numerator / denominator);
    let num = firstPart * secondPart * 1000;
    let ret = num.toFixed(1);

    //Assigns it to our output value in html file
    document.getElementById("output").innerHTML = ret;
}

// JQuery to create sliders and link to specific input boxes
$(document).ready(function(){
    // links permeability inputs
    for (let i = 1; i <= 3; i++) {
        $("#permeabilityTextbox" + i).change(function () {
            var value = this.value
            $("#permeabilitySlider" + i).slider("value", parseInt(value));
        });
        
        $("#permeabilitySlider" + i).slider({
            range: "min",
            value: 5000,
            step: 1,
            min: 0,
            max: 10000,
            slide: function(event, ui) {
                $("#permeabilityTextbox" + i).val(ui.value);
            }
        });
    }
    // links concentration inputs
    for (let i = 1; i <= 6; i++) {
        $("#concentrationTextbox" + i).change(function () {
            var value = this.value
            $("#concentrationSlider" + i).slider("value", parseInt(value));
        });
        
        $("#concentrationSlider" + i).slider({
            range: "min",
            value: 100,
            step: 1,
            min: 0,
            max: 200,
            slide: function(event, ui) {
                $("#concentrationTextbox" + i).val(ui.value);
            }
        });
    }
  });


/*
Use the textContent property to change the text of a 
span element, e.g. span.textContent = 'Replacement text'. 
The textContent property will set the text of the span to 
the provided string, replacing any of the existing content.*/
