import menu from "./main/mobile-menu.js";
import highlight from "./main/observe-nav.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    highlight();
    menu(".navbar__toggle",".navbar__menu");
});

 