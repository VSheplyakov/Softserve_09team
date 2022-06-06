function closeBurger(){
let toggleBlock = document.getElementById("heder-menu-toggle");
toggleBlock.checked=false;
}
let allNav = document.querySelectorAll(".nav-link-page-toggl a");

for(let i=0; i<allNav.length; i++){
    allNav[i].addEventListener("click", closeBurger)
};
