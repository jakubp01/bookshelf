var objPeople=
[
    {
        username: "admin",
        password: "admin"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i=0; i < objPeople.length; i++)
    {
        if(username==objPeople[i].username && password==objPeople[i].password)
        {
        window.location.href="index.html"
        }
        else{alert("wrong password")}
    }
}


 let password = document.getElementById("password");
let loginButton = document.getElementById("loginButton")
 password.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      
      loginButton.click();
    }
  });