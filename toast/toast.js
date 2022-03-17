const toastBtn = document.querySelector("#toast-btn");
const toastText = document.querySelector("#toast-text");
toastBtn.addEventListener("click", displayToast);

function displayToast(){
    toastText.style.display = "block";
    setTimeout(hide, 2000);

}

function hide(){
    toastText.style.display="none";

}
