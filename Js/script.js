
const logInBtn = document.querySelector("#login-btn");

logInBtn.addEventListener('click', function(){
    const logInPage = document.querySelector("#login-page");
    logInPage.style.display = "none";

    const homePage = document.querySelector("#home-page");
    homePage.style.display = "block";

});
