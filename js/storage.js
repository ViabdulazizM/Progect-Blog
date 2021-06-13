function store()
{
var UserName = document.getElementById('UserName');
localStorage.setItem('name',  UserName.value)

var password = document.getElementById('name');
localStorage.setItem('name',  password.value)

}

function sginin()
{
var UserName = document.forms["Index"]["UserName"].value;
var password = document.forms["Index"]["password"].value;

if(UserName=="customer" && password=="1234")
{
window.location.href="Home.html";
}
else if(UserName=="expert" && password=="1234") 
{
window.location.href="BackPage.html";
}
else
{
alert("Invalid UserName and Password");
}
}