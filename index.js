let imgnone =document.getElementById('img-none');
let createimg=document.createElement('img');

let displayblock=document.getElementById('target');
// createimg.src="/img/Email.png"
const displayreview=()=>{
displayblock.classList.toggle('silde-block');
imgnone.src='img/upper (1).png'

style()
}
const style=()=>{
    if(document.getElementById('displaycontain').style.background!="red"){
        document.getElementById('displaycontain').style.background="red"
    }
    else{
        document.getElementById('displaycontain').style.background="white"
    }

}
document.getElementById('displaycontain').addEventListener('click',displayreview)







let menu =document.getElementById("menu");
let navbar =document.getElementById("navbar");

const display =()=>{
    navbar.classList.toggle("show");
}
menu.addEventListener("click",display)
document.getElementById("close").addEventListener("click",display)