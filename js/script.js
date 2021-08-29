// Change text size code --------------------------------------------------------------------------

document.getElementById("smallA").onclick = function() { changeSize("small") };
document.getElementById("normalA").onclick = function() { changeSize("normal") };
document.getElementById("mediumA").onclick = function() { changeSize("medium") };
document.getElementById("largeA").onclick = function() { changeSize("large") };


function changeSize(size) {
    document.getElementsByTagName("section")[0].className = size
};

// Confirm matching emails ------------------------------------------------------------------------

function emailCheck() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
    if (email1.value != email2.value) {
        alert("The two emails do not match!!");
        return false;
    }
};

// Confirm matching passwords ---------------------------------------------------------------------

function passCheck() {
    var pass1 = document.getElementById('password_first');
    var pass2 = document.getElementById('password_repeat');
    if (pass1.value != pass2.value) {
        alert("The two passwords do not match!!");
        return false;
    }
};

// Allow Star Wars name ---------------------------------------------------------------------------

function StarWarsNameFunction() {
    if (document.getElementById('yesStarWarsName').checked) {
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nickname').setAttribute('required', true);
    } else {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display = "none";
    }
}


// function printDiv(divName) {
//     //alert('s');
//     var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
//     var inputs, index;

//     inputs = document.getElementsByTagName('input');
//     for (index = 0; index < inputs.length - 1; ++index) {

//         var fieldName = inputs[index].name;
//         var fieldValue = inputs[index].value;

//         printContents += '<tr><td><label>' + fieldName + '</label></td>';
//         printContents += '<td>' + fieldValue + '</td></tr>';
//     }

//     var z = 8; // if you had more labels remeber to change this value 
//     inputs = document.getElementsByTagName('textarea');
//     for (index = 0; index < inputs.length; ++index) {

//         //var fieldName = inputs[index].name;
//         var fieldName = document.getElementsByTagName('label')[z].textContent;
//         var fieldValue = inputs[index].value;

//         printContents += '<tr><td colspan="2"><label>' + fieldName + '</label><br>' + fieldValue + '</td></tr>';
//         ++z;
//     }

//     printContents += '</tbody></table>';

//     w = window.open();
//     w.document.write(printContents);
//     w.print();
//     w.close();
// };

// Vote for favourite MOC -------------------------------------------------------------------------

function results() {
    var name = document.getElementById("pollName").value;
    var email = document.getElementById("pollEmail").value;

    if (document.getElementById("MOC1").checked) {
        poll = document.getElementById("MOC1").value;
    } else if (document.getElementById("MOC2").checked) {
        poll = document.getElementById("MOC2").value;
    } else if (document.getElementById("MOC3").checked) {
        poll = document.getElementById("MOC3").value;
    } else if (document.getElementById("MOC4").checked) {
        poll = document.getElementById("MOC4").value;
    } else if (document.getElementById("MOC5").checked) {
        poll = document.getElementById("MOC5").value;
    } else if (document.getElementById("MOC6").checked) {
        poll = document.getElementById("MOC6").value;
    } else if (document.getElementById("MOC7").checked) {
        poll = document.getElementById("MOC7").value;
    } else if (document.getElementById("MOC8").checked) {
        poll = document.getElementById("MOC8").value;
    } else if (document.getElementById("MOC9").checked) {
        poll = document.getElementById("MOC9").value;
    } else if (document.getElementById("MOC10").checked) {
        poll = document.getElementById("MOC10").value;
    } else if (document.getElementById("MOC11").checked) {
        poll = document.getElementById("MOC11").value;
    } else if (document.getElementById("MOC12").checked) {
        poll = document.getElementById("MOC12").value;
    } else if (document.getElementById("MOC13").checked) {
        poll = document.getElementById("MOC13").value;
    } else if (document.getElementById("MOC14").checked) {
        poll = document.getElementById("MOC14").value;
    } else {
        poll = document.getElementById("MOC15").value;
    }

    var comments = document.getElementById('pollComments').value;

    document.write("<h1>Thank you!</h1>");
    document.write("<p>Your vote has been counted!</p>");

    document.write("<h3>Your vote for your favourite MOC:</h3>");

    document.write(name + "<br>");
    document.write(email + "<br>");
    document.write(poll + "<br>");
    document.write(comments + "<br>");

    alert("Thank you! Your vote for MOC " + poll + " was submitted.");

}

// List of LEGO Star Warsn reviews ----------------------------------------------------------------

var reviewsLEGO = [];

function loadPlaces() {
    document.getElementById("LEGOStarWarsReviews").innerHTML = reviewsLEGO;
}

function myFunction() {
    var newReview = prompt("What LEGO Star Wars kit should be reviewed?");
    reviewsLEGO[reviewsLEGO.length] = " " + newReview;
    document.getElementById("LEGOStarWarsReviews").innerHTML = reviewsLEGO;
}

function submit() {
    var name = document.getElementById("enter");
    var theName = name.value;
    names.push(theName);
    document.getElementById("name").innerHTML = "";
    for (var I = 0; I < names.length; I++) {
        nameList = "<li>" + names[I] + "</li>";
        document.getElementById("name").innerHTML += nameList;
    }
}

// https://stackoverflow.com/questions/28677745/make-a-html-unordered-list-from-javascript-array/28677901


var messageGen = function() {
    var forecastByHour = [32, 15, 19, 25, 21];


    for (var i = 0; i <= forecastByHour.length; i++) {
        var temp = forecastByHour[i];
        var message = "On the " + [i] + " hour the expected forcase is to be" + temp;
        var listItems = document.createElement("li");

        listItems.innerHTML = message
    }

}

// https://stackoverflow.com/questions/43567079/simpler-way-to-print-array-items-into-list-items-javascript  

// function addRowToTable() {
//     var tbl = document.getElementById('tblSample');
//     var lastRow = tbl.rows.length;
//     // if there's no header row in the table, then iteration = lastRow + 1
//     var iteration = lastRow;
//     var row = tbl.insertRow(lastRow);

//     // left cell
//     var cellLeft = row.insertCell(0);
//     var textNode = document.createTextNode(iteration);
//     cellLeft.appendChild(textNode);

//     // right cell
//     var cellRight = row.insertCell(1);
//     var el = document.createElement('input');
//     el.type = 'text';
//     el.name = 'txtRow' + iteration;
//     el.id = 'txtRow' + iteration;
//     el.size = 40;
//     cellRight.appendChild(el);
// }

// function removeRowFromTable() {
//     var tbl = document.getElementById('tblSample');
//     var lastRow = tbl.rows.length;
//     if (lastRow > 2) tbl.deleteRow(lastRow - 1);
// }