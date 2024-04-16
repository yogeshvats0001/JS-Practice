// Event Bubbling & Capturing
// Stop Propagation, Immediate Propagation & Prevent Default

const div = document.getElementById("mainDiv");
const innerDiv1 = document.getElementById("innerDiv1");
const btn = document.getElementById("btn");
const innerDiv2 = document.getElementById("innerDiv2");
const input = document.getElementById("in");

div.addEventListener('click', ()=>{
    console.log('main div clicked');
}, true);

innerDiv1.addEventListener('click', ()=>{
    console.log('inner div 1 clicked');
}, true);

btn.addEventListener('click', () => {
    console.log('btn clicked');
});

innerDiv2.addEventListener('click', ()=>{
    console.log('inner div 2 clicked');
});

input.addEventListener('click', () => {
    console.log('input clicked');
});

