// Confirm matching emails ------------------------------------------------------------------------

function emailCheck() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
    if (email1.value === email2.value) {
        alert("The two emails match.");
    } else { alert("The two emails do not match!!"); }
};

// Confirm matching passwords ---------------------------------------------------------------------

function passCheck() {
    var pass1 = document.getElementById('password_first');
    var pass2 = document.getElementById('password_repeat');
    if (pass1.value === pass2.value) {
        alert("The two passwords match.");
    } else { alert("The two passwords do not match!!"); }
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
};

// Validate all membership form fields are entered, submit form and show alert, reset form --------

function membershipValidate() {
    var fields = ["First Email", "Second Email", "First Name", "Surname", "Password1", "Password2"]
    var i;
    var l = fields.length;
    var fieldname;

    // for loop to check if each field name is empty, ""; if not generate alert and reset form ----
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["membershipForm"][fieldname].value === "") {
            alert(fieldname + " can not be empty");
            return false;
        }
    }
    document.getElementById("membershipForm").reset();
    return alert("Your details have been submitted!");

};

// Validate all event form fields are entered, submit form and show alert, reset form -------------

function eventsValidate() {
    var fields = ["First Name", "Email", "Event Name", "Event Type", "Event Timing", "Event Location"]
    var i;
    var l = fields.length;
    var fieldname;

    // for loop to check if each field name is empty, ""; if not generate alert and reset form ----
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["eventsForm"][fieldname].value === "") {
            alert(fieldname + " can not be empty");
            return false;
        }
    }
    document.getElementById("eventsForm").reset();
    return alert("Your suggestion has been submitted!");

};

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

    // capture input data from above ID elements and generate message alert -----------------------
    alert("Thank you " + name + " " + email + "! Your vote for MOC " + poll + " and your comments " + comments + " were submitted.");

}

// List of LEGO Star Wars reviews that can be added to --------------------------------------------

var reviewsLEGO = ["75290 Mos Eisley Cantina", "75252 Imperial Star Destroyer"];

function loadReviews() { // load initial two reviews from array above, printed as unordered list --
    reviewsLEGOList = "";
    for (var i = 0; i < reviewsLEGO.length; i++) {
        reviewsLEGOList += "<li>" + reviewsLEGO[i] + "</li>";
    }
    document.getElementById("LEGOStarWarsReviews").innerHTML = reviewsLEGOList;
}

function submitFunction() { // add any additional reviews, added to existing unorder list ---------
    var newReview = prompt("What LEGO Star Wars kit should be reviewed?");
    reviewsLEGO.push(newReview);
    reviewsLEGOList = "";
    for (var i = 0, newReview; newReview = reviewsLEGO[i]; i++) {
        reviewsLEGOList += "<li>" + newReview + "</li>";
    }
    document.getElementById("LEGOStarWarsReviews").innerHTML = reviewsLEGOList;
}