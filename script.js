function Contactinfo()
{
    const name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
 
    if (name === "" || email === "" || number ==="")
    {
        alert("Please fill in all the fields");
    }
    else
    {
        alert("Form submitted successfully! Thank you.");
    }
}
function yesfun()
{
    function Contactinfo()
    {
        return null;
    }
}
function nofun()
{
    if (name === "" || email === "" || number ==="")
    {
        alert("Thank you for checking the profile")
    }
    return null
}