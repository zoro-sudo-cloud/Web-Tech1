function registerUser(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let gender=document.getElementById("gender").value;
let password=document.getElementById("password").value;

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("phoneError").innerHTML="";
document.getElementById("genderError").innerHTML="";
document.getElementById("passwordError").innerHTML="";

let valid=true;

if(name==""){
    document.getElementById("nameError").innerHTML="Name is required";
    valid=false;
}

if(email==""){
    document.getElementById("emailError").innerHTML="Email is required";
    valid=false;
}

if(phone==""){
    document.getElementById("phoneError").innerHTML="Phone Number is required";
    valid=false;
}

if(gender==""){
    document.getElementById("genderError").innerHTML="Please select gender";
    valid=false;
}

if(password==""){
    document.getElementById("passwordError").innerHTML="Password is required";
    valid=false;
}

if(valid){
    alert("Registration Successful");
    window.location="login.html";
}

}

function loginUser(){

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

document.getElementById("loginEmailError").innerHTML="";
document.getElementById("loginPasswordError").innerHTML="";

let valid=true;

if(email==""){
    document.getElementById("loginEmailError").innerHTML="Email is required";
    valid=false;
}

if(password==""){
    document.getElementById("loginPasswordError").innerHTML="Password is required";
    valid=false;
}

if(valid){
    alert("Login Successful");
    window.location="index.html";
}

}

function enroll(button,video){

if(button.innerHTML=="Enroll"){
    alert("Enrolled Successfully!");
    button.innerHTML="Start Learning";
    button.style.backgroundColor="blue";
}
else{
    window.open(video,"_blank");
}

}
