const languageselect = document.querySelector(".lang select");
const signin = document.querySelector(".sign");

languageselect.addEventListener("change", function () {
    const selectedlanguage = this.value;
    if(selectedlanguage === "Hindi"){
        signin.textContent = "साइन इन";
    }
    else{
        signin.textContent = "Sign In";
    }
})

signin.addEventListener("click", function () {
    window.location.href = "signin.html";
});
