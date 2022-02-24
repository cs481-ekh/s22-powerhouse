
/*jslint node: true*/
function sum(a, b) {
    return a + b;
}
// module.exports = sum;


$(document).ready(function(){
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
