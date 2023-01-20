"use strict"

const logout = document.querySelector(".button-login");

let message = "Are you sure you want to log out?\nYes or No."

  logout.addEventListener("click",function(){
  if(confirm(message == true)){
    window.location.href= "index.html"
  }
  else{
    window.location.href= "pages.html"
  }
})


