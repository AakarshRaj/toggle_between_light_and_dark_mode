const toggle_btn = document.getElementById('toggle_btn');
const toggler = document.getElementById('toggler');
const h3 = document.getElementById('h3');
let i = 0;
toggle_btn.addEventListener('click', ()=>{
    i+=1;
    console.log("clicked");
    toggler.classList.toggle('active');
    toggle_btn.classList.toggle('active');
    
    if (i==1) {
        document.documentElement.style.setProperty('--default_color', '#1e272e');
        h3.style.color="white";    
        console.log(i)
    } 
    if (i==2) {
        document.documentElement.style.setProperty('--default_color', '#d2dae2');
        h3.style.color="black";
        i=0;
        console.log(i);
    }
})