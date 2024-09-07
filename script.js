var tablinks=document.getElementsByClassName('tab-link');
var tabcontants=document.getElementsByClassName('tab-contant');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontant of tabcontants){
        tabcontant.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    // document.getElementsById(tabname).classList.add("active-tab");
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu=document.getElementById("sidemenu");
function  openmenu(){
    sidemenu.style.right="0";
}
function  closemenu(){
    sidemenu.style.right="-200px";
}