const mainPage = () => {
  const messageForm = document.querySelector('#form2-message')
  const emailForm = document.querySelectorAll('input[type=email]')
  const telForm = document.querySelectorAll('input[type=tel]')


  messageForm.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-яё\s-]/gi, '')
  })
  emailForm.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^a-z@_.!~*'-]/gi, '')
    })
  });
  telForm.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^+\d()-]/gi, '')
    })
  })

}

export default mainPage;