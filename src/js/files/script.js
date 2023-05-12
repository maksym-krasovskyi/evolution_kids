// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.querySelector('.request-call__button')?.addEventListener('click', function(e) {
    document.querySelector('.request-call')?.classList.toggle('_show');
});

function isValidPhone(p) {
    var phoneRe = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
}

const requestFormPhone = document.querySelector('#phone');
requestFormPhone.addEventListener('input', function() {

    if(!isValidPhone(requestFormPhone.value)) {
        requestFormPhone.classList.add('_notvalid');
    }
    else {
        requestFormPhone.classList.remove('_notvalid'); 
    }
})

const requestForm =  document.querySelector('#request-call');
requestForm?.addEventListener('submit', async function(e) {
    e.preventDefault();

    let error = 0;

    let formData = new FormData(requestForm);

    if (isValidPhone(requestFormPhone.value)) {
        requestForm.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            requestForm.reset();
            requestForm.classList.remove('_sending');
        } else {
            alert("Ошибка");
            requestForm.classList.remove('_sending');
        }
    } else {
        alert('Заполните обязательные поля!');
    }
});
