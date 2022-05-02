let imgnone =document.getElementById('img-none');
let displayblock=document.getElementById('target');


const displayreview=()=>{    
displayblock.classList.toggle('silde-block');
imgsrc()
style()
}
const style=()=>{
    if(document.getElementById('displaycontain').style.background!="red"){
        document.getElementById('displaycontain').style.background="red"
        document.getElementById('displaycontain').style.color='white'
    }
    else{
        document.getElementById('displaycontain').style.background="white"
        document.getElementById('displaycontain').style.color='black'
    }

}
const imgsrc=()=>{
 if(imgnone.getAttribute('class')=='fa-solid fa-angle-up'){
     imgnone.setAttribute('class','fa-solid fa-angle-down')
 }
 else {
    imgnone.setAttribute('class','fa-solid fa-angle-up')

 }
}
document.getElementById('displaycontain').addEventListener('click',displayreview);

let menu =document.getElementById("menu");
let navbar =document.getElementById("navbar");

const display =()=>{
    navbar.classList.toggle("show");
}
menu.addEventListener("click",display)
document.getElementById("close").addEventListener("click",display);



const welcome=()=>{
    alert('Welcome Foodie lover');
}
