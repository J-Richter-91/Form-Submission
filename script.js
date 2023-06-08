let success = document.querySelector(".pop-up")
let form = document.querySelector(".container");
let dismiss = document.querySelector(".dismiss-btn");
let successText = document.querySelector(".pop-up-text");




function popUp(){
    successText.textContent = `A confirmation email has been sent to ${email.value}. Please 
    open it and click the button inside to confirm your subscription.`;
    success.style.display = 'block';
    form.style.display = "none";
    

    
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    popUp();
})

dismiss.addEventListener("click", function(){
    success.style.display = "none";
    form.style.display = "flex";
    email.value = "";
})