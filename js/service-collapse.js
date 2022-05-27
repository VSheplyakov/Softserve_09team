
const forClickButtons = document.getElementsByClassName('service_btn_collapce');
let collapseOpen = 0;

for(let button of forClickButtons) {
    button.onclick = openCollapseItem;
}



function openCollapseItem(){


const elem = this.closest('.service_img_block');


    if(collapseOpen == 0){
        elem.querySelector('.service_hide_info').style.display = 'block'; 
        this.innerHTML = '-';
        collapseOpen = 1;
        return;
    }
    if(collapseOpen == 1){
        elem.querySelector('.service_hide_info').style.display = 'none'; 
        this.innerHTML = '+';
        collapseOpen = 0;
        return;
    }

}

