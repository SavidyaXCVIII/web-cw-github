function validateForm() {
    var first = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var address = document.forms["myForm"]["address"].value;
    var x=document.forms["myForm"]["e-mail"].value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    var status=false;

    //first name validation//
    if (first == "") {
        document.getElementById("fnamelocation").innerHTML="Please enter your first name !";
        status=false;
    }else{
        document.getElementById("fnamelocation").innerHTML="";
        status=true;
    }
    //last name validation//
    if (last == "") {
        document.getElementById("lnamelocation").innerHTML="Please enter your last name !";
        status=false;
    }else{
        document.getElementById("lnamelocation").innerHTML="";
        status=true;
    }
    //address validation//
    if (address == "") {
        document.getElementById("address_location").innerHTML="Please enter your address !";
        status=false;
    }else{
        document.getElementById("address_location").innerHTML="";
        status=true;
    }
    //email validation
    if (x == "") {
        document.getElementById("email_location").innerHTML = "Please enter your Email !";
        status = false;
    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        document.getElementById("email_location").innerHTML="Please enter a valid e-mail address !";
        status= false;
    }else{
        document.getElementById("email_location").innerHTML = "";

    }
    return status;
}