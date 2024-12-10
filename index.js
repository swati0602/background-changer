//! select the element

const btn1EL = document.querySelector('.btn1');
const btn2EL = document.querySelector('.btn2');
const titalEl = document.querySelector('.title');
const ResetBTN = document.querySelector('.Reset');
const bodyEl = document.querySelector("body");

//Add event listeners

btn1EL.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = 'yellow'
})

btn2EL.addEventListener('click',()=> {
titalEl.style.fontSize = "90px";
});

ResetBTN.addEventListener('click', function(){
    bodyEl.style.backgroundColor = '';
    titalEl.style.fontSize ='';
})