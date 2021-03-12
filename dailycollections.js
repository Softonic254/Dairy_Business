
var shedA;
var shedB
var shedC;
var shedD;

var sA;
var sB;
var sC;
var sD;


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
        document.getElementById("shed_a").innerHTML = "Your production for shed A is " + arraySheds[0] + " litres."
        document.getElementById("shed_b").innerHTML = "Your production for shed B is " + arraySheds[1] + " litres."
        document.getElementById("shed_c").innerHTML = "Your production for shed C is " + arraySheds[2] + " litres."
        document.getElementById("shed_d").innerHTML = "Your production for shed D is " + arraySheds[3] + " litres."
        document.getElementById("total").innerHTML = "Your total production in all sheds is " + dailytotals + " litres."
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

    var weekly = dailytotals * 7;
    var yearly = dailytotals * 365;


    if (isNaN(sA) || isNaN(sB) || isNaN(sC) | isNaN(sD)) {
        alert("Incomplete/No records found");
    } else {

        document.getElementById("wkincome").innerHTML = "Weekly and yearly income"
        document.getElementById("weekly").innerHTML = "Your weekly production is " + weekly + " litres.";
        document.getElementById("yearly").innerHTML = "Your yearly production will be " + yearly + " litres.";

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

    var one = 31 * dailytotals;
    var zero = 30 * dailytotals;

    if (isNaN(sA) || isNaN(sB) || isNaN(sC) | isNaN(sD)) {
        alert("Incomplete/No records found");
    } else {
        document.getElementById("Monthlyincome").innerHTML = "Monthly output"
        document.getElementById("jan").innerHTML = "Your income for the month of " + month[0] + " will be " + one + " litres.";
        document.getElementById("feb").innerHTML = "Your income for the month of " + month[1] + " will be " + zero + " litres.";
        document.getElementById("mar").innerHTML = "Your income for the month of " + month[2] + " will be " + one + " litres.";
        document.getElementById("apr").innerHTML = "Your income for the month of " + month[3] + " will be " + zero + " litres.";
        document.getElementById("may").innerHTML = "Your income for the month of " + month[4] + " will be " + one + " litres.";
        document.getElementById("june").innerHTML = "Your income for the month of " + month[5] + " will be " + zero + " litres.";
        document.getElementById("july").innerHTML = "Your income for the month of " + month[6] + " will be " + one + " litres.";
        document.getElementById("aug").innerHTML = "Your income for the month of " + month[7] + " will be " + zero + " litres.";
        document.getElementById("sep").innerHTML = "Your income for the month of " + month[8] + " will be " + one + " litres.";
        document.getElementById("oct").innerHTML = "Your income for the month of " + month[9] + " will be " + zero + " litres.";
        document.getElementById("nov").innerHTML = "Your income for the month of " + month[10] + " will be " + one + " litres.";
        document.getElementById("dec").innerHTML = "Your income for the month of " + month[11] + " will be " + zero + " litres.";
    }

}

function reset() {
    location.reload();
}
