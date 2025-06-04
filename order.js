function validation(event) {
    event.preventDefault();

    var product = document.getElementById("product").value;
    var producterror = document.getElementById("producterror");
    if (product === "none") {
        producterror.innerHTML = "Please select our product.";
    } else {
        producterror.innerHTML = "";
    }

    var name = document.getElementById("name").value;
    var nameerror = document.getElementById("nameerror");
    if (name.trim() === "") {
        nameerror.innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        nameerror.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        nameerror.innerHTML = "";
    }

    var message = document.getElementById("message").value;
    var messageerror = document.getElementById("message-error");
    if (message.length > 30) {
        messageerror.innerHTML = "Message should not exceed 30 characters.";
    } else {
        messageerror.innerHTML = "";
    }

    var date = document.getElementById("date").value;
    var dateerror = document.getElementById("dateerror");
    if (date === "") {
        dateerror.innerHTML = "Please fill out the delivery date.";
    } else {
        dateerror.innerHTML = "";
    }

    var location = document.getElementById("location").value;
    var locationerror = document.getElementById("locationerror");
    if (location.trim() === "") {
        locationerror.innerHTML = "Please fill out the address.";
    } else if (location.length > 500) {
        locationerror.innerHTML = "Address should not exceed 500 characters.";
    } else {
        locationerror.innerHTML = "";
    }
}
