const forClickButtons = document.getElementsByClassName("service_btn_collapce");


for (let button of forClickButtons) {
  button.onclick = openCollapseItem;
}

function openCollapseItem() {
  const elem = this.closest(".service_img_block");

  if (elem.querySelector(".service_hide_info").style.display == "none" || elem.querySelector(".service_hide_info").style.display == "") {
    elem.querySelector(".service_hide_info").style.display = "block";
    this.innerHTML = "-";
    return;
  }else{
    elem.querySelector(".service_hide_info").style.display = "none";
    this.innerHTML = "+";
    return;
  }
}

