///THROTTLING in JS

///WHAT: It is a technique used to control the rate of execution of a process or consumption of the resources. Basic requirement is to prevent the overload situation, manage traffics or to limits the usage.

///EXAMPLE: disabling the button for some time to prevent the rate of requests.
const btnElement = document.getElementById('save__btn');

function throttling(){
    btnElement.disabled = true;
    setTimeout(()=>{
        console.log('btn clicked');
        btnElement.disabled = false;
    }, 5000);
}

document.getElementById('save__btn').addEventListener('click', throttling);