const d = document,
 w = window;

export default function menu(toggles, menu){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(toggles) || (e.target.matches(`${toggles} *`))){
            d.querySelector(menu).classList.toggle("active");
            d.querySelector(toggles).classList.toggle("is-active");
        }else{
            w.onscroll = () =>{
                d.querySelector(menu).classList.remove("active");
                d.querySelector(toggles).classList.remove("is-active");
            }
        }
    })
}