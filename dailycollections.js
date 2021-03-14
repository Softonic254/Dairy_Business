
var shedA;
var shedB
var shedC;
var shedD;

var sA;
var sB;
var sC;
var sD;


var sheds = [{
    name: 'Shed A',
},

{
    name: 'Shed B',
},
{
    name: 'Shed C',
},
{
    name: 'Shed D'
}
]

function dairyRec() {
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;

    sA = parseFloat(shedA);
    sB = parseFloat(shedB);
    sC = parseFloat(shedC);
    sD = parseFloat(shedD);

    var arraySheds = [sA, sB, sC, sD];
    var dailytotals = arraySheds[0] + arraySheds[1] + arraySheds[2] + arraySheds[3];

    if (isNaN(sA) || isNaN(sB) || isNaN(sC) | isNaN(sD)) {
        alert("Incomplete/No records found");
    } else {
        document.getElementById("shedsRec").innerHTML = "Production per shed."
        document.getElementById("shed_a").innerHTML = "Your production for shed A is " + arraySheds[0] + " litres per day."
        document.getElementById("shed_b").innerHTML = "Your production for shed B is " + arraySheds[1] + " litres per day."
        document.getElementById("shed_c").innerHTML = "Your production for shed C is " + arraySheds[2] + " litres per day."
        document.getElementById("shed_d").innerHTML = "Your production for shed D is " + arraySheds[3] + " litres per day."
        document.getElementById("total").innerHTML = "Your total production in all sheds is " + dailytotals + " litres per day."
    }

}

function calculate() {
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;

    sA = parseFloat(shedA);
    sB = parseFloat(shedB);
    sC = parseFloat(shedC);
    sD = parseFloat(shedD);

    var arraySheds = [sA, sB, sC, sD];
    var dailytotals = arraySheds[0] + arraySheds[1] + arraySheds[2] + arraySheds[3];


    if (isNaN(sA) || isNaN(sB) || isNaN(sC) | isNaN(sD)) {
        alert("Incomplete/No records found");
    } else {

        function calc(selling_price, time) {
            return selling_price * time * dailytotals;
        }

        document.getElementById("wkincome").innerHTML = "Weekly and yearly income"
        document.getElementById("weekly").innerHTML = "Your weekly income will be Kshs." + calc(45, 7) + ".";
        document.getElementById("yearly").innerHTML = "Your yearly income will be Kshs." + calc(45, 366) + ".";

    }

}

function monthly() {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];

    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;

    sA = parseFloat(shedA);
    sB = parseFloat(shedB);
    sC = parseFloat(shedC);
    sD = parseFloat(shedD);


    var arraySheds = [sA, sB, sC, sD];
    var dailytotals = arraySheds[0] + arraySheds[1] + arraySheds[2] + arraySheds[3];

    function calc(time) {
        return time * dailytotals;
    };

    if (isNaN(sA) || isNaN(sB) || isNaN(sC) | isNaN(sD)) {
        alert("Incomplete/No records found");
    } else {
        document.getElementById("Monthlyincome").innerHTML = "Monthly output"
        document.getElementById("jan").innerHTML = "Your income for the month of " + month[0] + " will be " + calc(31) + " litres.";
        document.getElementById("feb").innerHTML = "Your income for the month of " + month[1] + " will be " + calc(29) + " litres.";
        document.getElementById("mar").innerHTML = "Your income for the month of " + month[2] + " will be " + calc(31) + " litres.";
        document.getElementById("apr").innerHTML = "Your income for the month of " + month[3] + " will be " + calc(30) + " litres.";
        document.getElementById("may").innerHTML = "Your income for the month of " + month[4] + " will be " + calc(31) + " litres.";
        document.getElementById("june").innerHTML = "Your income for the month of " + month[5] + " will be " + calc(30) + " litres.";
        document.getElementById("july").innerHTML = "Your income for the month of " + month[6] + " will be " + calc(31) + " litres.";
        document.getElementById("aug").innerHTML = "Your income for the month of " + month[7] + " will be " + calc(30) + " litres.";
        document.getElementById("sep").innerHTML = "Your income for the month of " + month[8] + " will be " + calc(31) + " litres.";
        document.getElementById("oct").innerHTML = "Your income for the month of " + month[9] + " will be " + calc(30) + " litres.";
        document.getElementById("nov").innerHTML = "Your income for the month of " + month[10] + " will be " + calc(31) + " litres.";
        document.getElementById("dec").innerHTML = "Your income for the month of " + month[11] + " will be " + calc(30) + " litres.";
    }

}

function reset() {
    location.reload();
}
