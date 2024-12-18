var promo=document.getElementById("promo")
var closebutton=document.getElementById("closebutton")
closebutton.addEventListener("click",function(){
    promo.style.display="none";
})
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})
menuicon.addEventListener("click",function(){
    sidenav.style.left="0";
})
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})
menuicon.addEventListener("click",function(){
    sidenav.style.left="0";
})
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var errorMessage = "";
    
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        errorMessage = "Please fill in all fields.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage = "Please enter a valid email address.";
    }

    if (errorMessage) {
        event.preventDefault(); 
        document.getElementById("error-message").textContent = errorMessage;
    }
});
