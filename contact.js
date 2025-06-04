function validation(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var nameerror = document.getElementById("nameerror");
    if (name.trim() === "") {
        nameerror.innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        nameerror.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        nameerror.innerHTML = "";
    }

    var email = document.getElementById("email").value;
    var emailerror = document.getElementById("emailerror");
    if (email.trim() === "") {
        emailerror.innerHTML = "Please fill out your email.";
    } else if (email.length > 100) {
        emailerror.innerHTML = "Your email should not exceed 100 characters.";
    } else {
        emailerror.innerHTML = "";
    }

    var subject = document.getElementById("subject").value;
    var subjecterror = document.getElementById("subjecterror");
    if (subject.trim() === "") {
        subjecterror.innerHTML = "Please fill out the subject.";
    } else if (subject.length < 50) {
        subjecterror.innerHTML = "Subject should be at least 50 characters.";
    } else if (subject.length > 250) {
        subjecterror.innerHTML = "Subject should not exceed 250 characters.";
    } else {
        subjecterror.innerHTML = "";
    }

    var message = document.getElementById("message").value;
    var messageError = document.getElementById("message-error");
    if (message.trim() === "") {
        messageError.innerHTML = "Please fill out the message.";
    } else if (message.length > 500) {
        messageError.innerHTML = "Message should not exceed 500 characters.";
    } else {
        messageError.innerHTML = "";
    }
}
