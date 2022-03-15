/*jslint node: true*/
function sum(a, b) {
    return a + b;
}
if (typeof window === 'undefined') {
    module.exports = sum;
}

//Converts given celcius temperature to Kelvin
function convertToKelvin(celcius) {
    let ret = celcius + 273.15;
    return ret;
}

//Imports values from html form and uses them to calculate Goldman-Hodgkin-Katz solution
function calcVoltage() {

    //Constants for the equation
    let r = 8.3145;
    let f = 96485.3415;

    //Assigns values for variables from html form
    let potasPerm = parseInt(document.getElementById("permeabilityTextbox1").value);
    if(potasPerm > 10000){
        potasPerm = 10000;
        document.getElementById("permeabilityTextbox1").value = 10000;
    }
    let potassium1 = parseInt(document.getElementById("concentrationTextbox1").value);
    if(potassium1 > 200){
        potassium1 = 200;
        document.getElementById("concentrationTextbox1").value = 200;
    }
    let potassium2 = parseInt(document.getElementById("concentrationTextbox2").value);
    if(potassium2 > 200){
        potassium2 = 200;
        document.getElementById("concentrationTextbox2").value = 200;
    }
    let sodiumPerm = parseInt(document.getElementById("permeabilityTextbox2").value);
    if(sodiumPerm > 10000){
        sodiumPerm = 10000;
        document.getElementById("permeabilityTextbox2").value = 10000;
    }
    let sodium1 = parseInt(document.getElementById("concentrationTextbox3").value);
    if(sodium1 > 200){
        sodium1 = 200;
        document.getElementById("concentrationTextbox3").value = 200;

    }
    let sodium2 = parseInt(document.getElementById("concentrationTextbox4").value);
    if(sodium2 > 200){
        sodium2 = 200;
        document.getElementById("concentrationTextbox4").value = 200;

    }
    let chloridePerm = parseInt(document.getElementById("permeabilityTextbox3").value);
    if(chloridePerm > 10000){
        chloridePerm = 10000;
        document.getElementById("permeabilityTextbox3").value = 10000;

    }
    let chloride1 = parseInt(document.getElementById("concentrationTextbox5").value);
    if(chloride1 > 200){
        chloride1 = 200;
        document.getElementById("concentrationTextbox5").value = 200;

    }
    let chloride2 = parseInt(document.getElementById("concentrationTextbox6").value);
    if(chloride2 > 200){
        chloride2 = 200;
        document.getElementById("concentrationTextbox6").value = 200;
    }
    let temp = parseInt(document.getElementById("temperatureTextbox").value);

    let kelvinTemp = convertToKelvin(temp);

    //Calculates value using our Goldman equation
    let numerator = ((potasPerm * potassium2) + (sodiumPerm * sodium2) + (chloridePerm * chloride1));
    let denominator = ((potasPerm * potassium1) + (sodiumPerm * sodium1) + (chloridePerm * chloride2))
    let firstPart = (-(r*kelvinTemp) / f);
    let secondPart = Math.log(numerator / denominator);
    let num = firstPart * secondPart * 1000;
    let ret = num.toFixed(2);

    //Assigns it to our output value in html file
    document.getElementById("output").innerHTML = ret;
    return ret;
}

// Only run when document is ready and all values are loaded
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
            min: 1,
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
            min: 1,
            max: 200,
            slide: function(event, ui) {
                $("#concentrationTextbox" + i).val(ui.value);
            }
        });
    }
    // temperature slider
    $("#temperatureTextbox").change(function () {
        var value = this.value
        $("#temperatureSlider").slider("value", parseInt(value));
    });
    
    $("#temperatureSlider").slider({
        orientation: "vertical",
        range: "min",
        value: 25,
        step: 1,
        min: 0,
        max: 50,
        slide: function(event, ui) {
            $("#temperatureTextbox").val(ui.value);
        }
    });
    // create plot
    var layout = {
        xaxis: {range: [0, 200], autorange: true, ticks: '', showticklabels: false},
        yaxis: {title: 'Voltage (mV)', range: [-100,100]}

      };
    var plot = Plotly.newPlot('chart', [{ y: [calcVoltage()],}],layout);
    var i = 0;

    setInterval(function() {
        i++;
        if(i > 200) {
            Plotly.relayout('chart',{'xaxis.range': [i - 200, i]})
        }
        Plotly.extendTraces('chart', {y: [[calcVoltage()]]}, [0])}, 200);
});

