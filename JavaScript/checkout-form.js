function validate(){
    var name=document.f1.name.value;
    var passwordlength=document.f1.password.value.length;
    var status=false;
    if(name==""){
        document.getElementById("namelocation").innerHTML=
            "Please enter your name";
        status=false;
    }else{
        //document.getElementById("namelocation").innerHTML=" <img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
        document.getElementById("namelocation").innerHTML="";
        status=true;
    }

    if(passwordlength<6){
        document.getElementById("passwordlocation").innerHTML=
            "Password must be greater than 6";
        status=false;
    }else{
        //document.getElementById("passwordlocation").innerHTML=" <img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
    }

    return status;
}