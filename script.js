function Contactinfo() {
    if (document.getElementById('yes').checked) {
        const name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        const number = document.getElementById("number").value;

        if (name === "" || email === "" || number === "") {
            alert("Please fill in all the fields");
        }
        else {
            alert("Form submitted successfully! Thank you.");
        }
    }
    else {
        if (name === "" || email === "" || number === "") {
            alert("Thank you for checking the profile")
        }
    }

}
// function yesfun() {
//     if (document.getElementById('yesno').checked) {
//         function Contactinfo() { }
//     }
//     else {
//         if (name === "" || email === "" || number === "") {
//             alert("Thank you for checking the profile")
//         }
//     }
// }
