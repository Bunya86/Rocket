window.onload=function(){

let okBtn = document.getElementById('okPassword');
const inputPass = document.getElementById('password');

const checkbox = document.querySelectorAll('input[type=checkbox]');
const levers = document.querySelectorAll('input[type=range]');
const launch = document.getElementById('launch');


const disableInputs = () => {
    checkbox.forEach(function (e) {
        e.setAttribute('disabled', '');
    })

    levers.forEach(function (e) {
        e.setAttribute('disabled', '');
    })

    launch.setAttribute('disabled', '');
}

disableInputs();

const enableInputs = () => {
    checkbox.forEach(function (e) {
        e.removeAttribute('disabled');
    })

    levers.forEach(function (e) {
        e.removeAttribute('disabled');
    })

    launch.removeAttribute('disabled');

    inputPass.setAttribute('disabled', '');
    okBtn.setAttribute('disabled', '');
}


const switchOn = () => {
    const inputs = document.querySelectorAll('.check-buttons>input');
    inputs.disabled = true;
    inputPass.value === 'TrustNo1' ? enableInputs() : console.log('not valid');
}

okBtn.addEventListener("click", () => {
    switchOn();
})
}
//////////////////////////////////
/*
// для этого кода нужно disabled в html прописать

let password = document.getElementById("password");
let inputs = document.getElementsByTagName("input");
let subButton = document.getElementById("submit");

subButton.addEventListener("click", function () {
    for (let i = 0; i < inputs.length; i++) {
        if (password.value !== "TrustNo1") {
            inputs[i].disabled = true;
            password.disabled = false;
            subButton.disabled = false;
        } else {
            inputs[i].disabled = false;
            password.disabled = true;
            subButton.disabled = true;
        }
    }
});

*/
/////////////////////////////////////////////////////