const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="At least six letter*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if (!validateEmail(document.Formfill.Email.value)) {
        document.getElementById("result").innerHTML = "Enter a valid email address and ends with '@gmail.com'*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6 || document.Formfill.Password.value.length>6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
    }
    else if (document.Formfill.birthday.value == "") {
        document.getElementById("result").innerHTML = "Enter your Date of Birth*";
        return false;
    }
    else if (!document.getElementById("checkbox").checked) {
        document.getElementById("result").innerHTML = "Please agree to the regulations*";
        return false;
    }
    else {
        popup.classList.add("open-slide");
        return false;
    }
}

function validateEmail(Email) {
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(Email);
}

var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}