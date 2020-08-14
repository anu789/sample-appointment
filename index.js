document.getElementById("english_registration_form").onsubmit = function () {
    var x = document.forms["english_registration_form"]["name"].value;
    var y = document.forms["english_registration_form"]["email"].value;
    var e = document.forms["english_registration_form"]["telephone"].value;
    var z = document.forms["english_registration_form"]["age"].value;
    var a = document.forms["english_registration_form"]["date"].value;
    var b = document.forms["english_registration_form"]["address"].value;
    var c = document.forms["english_registration_form"]["postal"].value;
    var submit = true;

    if (x == null || x == "") {
        nameError = "Please enter your name";
        document.getElementById("name_error").innerHTML = nameError;
        submit = false;
    }

    if (y == null || y == "") {
        phoneError = "Please enter your telephone";
        document.getElementById("mobile_error").innerHTML = phoneError;
        submit = false;
    }

    if (z == null || z == "") {
        telephoneError = "Please enter your age";
        document.getElementById("age_error").innerHTML = telephoneError;
        submit = false;
    }
    if (a == null || a == "") {
        dateError = "Please enter date";
        document.getElementById("date_error").innerHTML = dateError;
        submit = false;
    }
    if (b == null || x == "") {
        nameError = "Please enter your address";
        document.getElementById("address_error").innerHTML = nameError;
        submit = false;
    }
    if (c == null || x == "") {
        nameError = "Please enter your code";
        document.getElementById("postal_error").innerHTML = nameError;
        submit = false;
    }
    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("telephone").onkeyup = removeWarning;
document.getElementById("dat").onkeyup = removeWarning;