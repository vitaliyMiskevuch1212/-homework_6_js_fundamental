(function (){
    const inputName = document.querySelectorAll('input[name="name"]');
    const inputEmail = document.querySelectorAll('input[name="email"]');
    const inputPhone = document.querySelectorAll('input[name="phone"]');
    const sendButton = document.querySelector('#sendButton');
    const OutBlock = document.querySelector('#OutBlock');

    sendButton.addEventListener('click', function (event){
        event.preventDefault();
        const nameValue = inputName[0].value;
        const emailValue = inputEmail[0].value;
        const phoneValue = inputPhone[0].value;

        OutBlock.innerHTML = `Ім'я: ${nameValue} , електронна пошта: ${emailValue} , телефонний номер: ${phoneValue}`;
    });
})();