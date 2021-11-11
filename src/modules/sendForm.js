const sendForm = ({formId, someElement = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loaText = 'Загрузка...';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется';

    const validate = (list) => {
        let phone = true;
        let name = true;
        let message = true;

        list.forEach(value => {
            if (value.name === 'user_phone'){
                let pattern = /[\d\+]/gi;
                phone = pattern.test(value.value);
                console.log(phone)
            } else if (value.name === 'user_name') {
                let pattern = /[а-яё\s]/gi;
                name = pattern.test(value.value);
                console.log(name)
            }
            else if (value.name === 'user_message') {
                let pattern = /[а-я\d\s!?,.;:]/gi;
                message = pattern.test(value.value);
            }
        })

        return phone && name && message;
    }

    const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json'
          }
      }).then(response => response.json())
    }
    
    const submitForm = () => {
        const formData = new FormData (form)
        const formElements = form.querySelectorAll('input')
        const formBody = {};

        statusBlock.textContent = loaText;
        form.append(statusBlock)

        formData.forEach((value, key) => {
            formBody[key] = value
        })

        someElement.forEach(value => {
            const element = document.getElementById(value.id);
            if(value.type === 'block'){
                formBody[value.id] = element.textContent;
            } else if(value.type === 'input'){
                formBody[value.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = '';
                })
            }).catch( error => {
                statusBlock.textContent = errorText;
                console.log(error)
            })
        } else alert('Данные не валидны!')
    }
    try {

        if(!form){
            throw new Error('Верни форму откуда взял!')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch (e) {
        console.log(e.message)
    }

}

export default sendForm;