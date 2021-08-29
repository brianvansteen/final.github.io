document.getElementById("smallA").onclick = function() { changeSize("small") };
document.getElementById("normalA").onclick = function() { changeSize("normal") };
document.getElementById("mediumA").onclick = function() { changeSize("medium") };
document.getElementById("largeA").onclick = function() { changeSize("large") };


function changeSize(size) {
    document.getElementsByTagName("section")[0].className = size
};

function emailCheck() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
    if (email1.value != email2.value) {
        alert("The two emails do not match!!");
        return false;
    }
};

function passCheck() {
    var pass1 = document.getElementById('password_first');
    var pass2 = document.getElementById('password_repeat');
    if (pass1.value != pass2.value) {
        alert("The two passwords do not match!!");
        return false;
    }
};

function nicknameFunction() {
    if (document.getElementById('yesNick').checked) {
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nickname').setAttribute('required', true);
    } else {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display = "none";
    }
};


function printDiv(divName) {
    //alert('s');
    var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
    var inputs, index;

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length - 1; ++index) {

        var fieldName = inputs[index].name;
        var fieldValue = inputs[index].value;

        printContents += '<tr><td><label>' + fieldName + '</label></td>';
        printContents += '<td>' + fieldValue + '</td></tr>';
    }

    var z = 8; // if you had more labels remeber to change this value 
    inputs = document.getElementsByTagName('textarea');
    for (index = 0; index < inputs.length; ++index) {

        //var fieldName = inputs[index].name;
        var fieldName = document.getElementsByTagName('label')[z].textContent;
        var fieldValue = inputs[index].value;

        printContents += '<tr><td colspan="2"><label>' + fieldName + '</label><br>' + fieldValue + '</td></tr>';
        ++z;
    }

    printContents += '</tbody></table>';

    w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
};

function results() {
    var name = document.getElementById("pollName").value;
    var email = document.getElementById("pollEmail").value;

    document.write("<h1>Thank you!</h1>");
    document.write("<p>Your vote has been counted!</p>");

    document.write("<h3>Here are the voting results so far:</h3>");


}


function addRowToTable() {
    var tbl = document.getElementById('tblSample');
    var lastRow = tbl.rows.length;
    // if there's no header row in the table, then iteration = lastRow + 1
    var iteration = lastRow;
    var row = tbl.insertRow(lastRow);

    // left cell
    var cellLeft = row.insertCell(0);
    var textNode = document.createTextNode(iteration);
    cellLeft.appendChild(textNode);

    // right cell
    var cellRight = row.insertCell(1);
    var el = document.createElement('input');
    el.type = 'text';
    el.name = 'txtRow' + iteration;
    el.id = 'txtRow' + iteration;
    el.size = 40;
    cellRight.appendChild(el);
}

function removeRowFromTable() {
    var tbl = document.getElementById('tblSample');
    var lastRow = tbl.rows.length;
    if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}