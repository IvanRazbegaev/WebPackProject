const sendForm = ({formId, someElement = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется';
    let alertMessage = 'Данные не валидны!';

    const validate = (list) => {
        let phone = true;
        let name = true;
        let email = true;

        list.forEach(value => {
            if (value.name === 'user_phone'){
                if(value.value.length < 11){
                    alertMessage = 'Телефонный номер не может быть менее 11 символов!';
                    phone = false;
                }
            } else if (value.name === 'user_name') {
                if(value.value.length < 2){
                    alertMessage = 'Имя не может быть менее 2ух символов!';
                    name = false;
                }
            } else if (value.name === 'user_email'){
                if(value.value === ''){
                    email = false;
                    alertMessage = 'Поле "E-mail" является обязательным. заполните его!';
                }
            }
        })

        return phone && name && email;
    }

    const spinLoader = (state, bouncers = 3) => {
        const spinner = document.createElement('div');

        statusBlock.id = 'status';
        statusBlock.style.color = 'white';

      if (state === 'start'){
          for (let i = 1; i <= bouncers; i++){
              const bouncer = document.createElement('div');
              bouncer.classList.add(`bounce${i}`);
              spinner.append(bouncer);
          }
          spinner.classList.add('spinner');
          statusBlock.append(spinner);
      } else if (state === 'stop'){
        const spinnerElem = document.querySelector('.spinner');
        spinnerElem.remove();
      }
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
        const formData = new FormData (form);
        const formElements = form.querySelectorAll('input');
        const formBody = {};

        spinLoader('start');
        form.insertAdjacentElement('beforeend',statusBlock);

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
                spinLoader('stop')
                statusBlock.textContent = successText
                setTimeout(() => {
                    statusBlock.textContent = ''
                }, 3000)
                formElements.forEach(input => {
                    input.value = '';
                })
            }).catch( error => {
                spinLoader('stop')
                statusBlock.textContent = errorText;
                setTimeout(() => {
                    statusBlock.textContent = ''
                }, 3000)
                console.log(error)
            })
        } else {
            spinLoader('stop')
            alert(alertMessage)
        }
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