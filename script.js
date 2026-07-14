// Register

function registerUser(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(name=="" || email=="" || password=="")
{
    alert("Please fill all fields");
}
else
{
    alert("Registration Successful");
    window.location="login.html";
}

}

// Login

function loginUser(){

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

if(email=="" || password=="")
{
    alert("Please enter Email and Password");
}
else
{
    alert("Login Successful");
    window.location="index.html";
}

}

// Enroll

function enroll(button, video) {

    if (button.innerHTML === "Enroll") {

        alert("Enrolled Successfully!");

        button.innerHTML = "Watch Video";

        button.style.backgroundColor = "blue";

    } else {

        window.open(video, "_blank");

    }

}