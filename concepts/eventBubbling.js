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

btn.addEventListener('click', (event) => {
    event.stopPropagation(); //not working since propagation is not starting from btn.

    // event.stopImmediatePropagation();
    console.log('btn clicked');
});

btn.addEventListener('click', (event) => {
    console.log('btn clicked again');
});

innerDiv2.addEventListener('click', ()=>{
    console.log('inner div 2 clicked');
});

input.addEventListener('click', (event) => {
    event.stopPropagation();//will work &  and main will appear.
    console.log('input clicked');
});

//event.stopPropagation() : It will stop the propagation of the event from the child to parent in event bubbling. And in case of event capturing, it will work since stopPropagaton stops the flow from child to parent.
//event.stopImmediatePropagation() : This is used to stop the event if we have multiple events associated with the since element.
//event.preventDefault() : It's used to stop the default behaviour of any element. Like: anchor tag opens the new tab and by use of .preventDefault() then we can stop the default things.

